import React, { useEffect, useRef, useState } from 'react';
import './SideAsciiSpace.css';

// Atmospheric phase profiles based on visitor's local time of day
const SKY_THEMES = {
  dawn: {
    name: 'DAWN',
    // Soft morning mist and dawn vapor
    ramp: [' ', '·', '.', '°', '~', '≈', 'c', 'o', '⁕', '✦'],
    densityCutoff: 0.32,
    densityExponent: 1.4,
    noiseScaleX: 0.0026,
    noiseScaleY: 0.0040,
    speedMult: 0.85,
    puffChars: ['·', '°', '⁕', '~', 'c'],
    darkPalette: {
      rim: [251, 191, 36],     // warm sunrise amber
      core: [255, 248, 240],    // soft morning mist white
      telemetry: '251, 191, 36'
    },
    lightPalette: {
      rim: [245, 158, 11],     // soft warm amber glow
      core: [194, 65, 12],      // gentle morning terracotta rose
      telemetry: '217, 119, 6'
    },
    telemetry: [
      "[DAWN-BREAK]",
      "[MIST.VAPOR: 92%]",
      "✦ MORNING-GLOW",
      "[SOLAR.ELEV: +4°]",
      "::: AM.ATMOS :::",
      "<DAWN.FLOW>",
      "[AM.DEWPOINT: 11°C]",
      "[SUNRISE.AZIMUTH: 072°]"
    ]
  },
  day: {
    name: 'DAY',
    // Rounded cumulus billows, airy dither & wisps
    ramp: [' ', '·', '.', '°', '~', 'c', 'o', 'C', 'O', '☁', '▒'],
    densityCutoff: 0.33,
    densityExponent: 1.35,
    noiseScaleX: 0.0028,
    noiseScaleY: 0.0042, // horizontally elongated cumulus formations
    speedMult: 1.0,
    puffChars: ['°', '·', '~', 'c', 'o'],
    darkPalette: {
      rim: [56, 189, 248],     // vibrant sky-blue contour
      core: [240, 248, 255],    // luminous fluffy cloud white
      telemetry: '56, 189, 248'
    },
    lightPalette: {
      rim: [56, 189, 248],      // soft airy sky-blue at wispy edges
      core: [3, 105, 161],       // calm cerulean / slate cloud density tone
      telemetry: '2, 132, 199'
    },
    telemetry: [
      "[ALT.CUMULUS]",
      "10.4k FT",
      "[CLOUD.MASS]",
      "[WIND-DRIFT: 7kt]",
      "✦ STRATUS-VEIL",
      "::: ATMOS-GRID :::",
      "<SKY.FLOW>",
      "[BARO: 1014 hPa]"
    ]
  },
  dusk: {
    name: 'DUSK',
    // Striated sunset layers and twilight haze
    ramp: [' ', '·', '.', '—', '-', '=', '≡', 'c', 'O', '▒', '✦'],
    densityCutoff: 0.32,
    densityExponent: 1.4,
    noiseScaleX: 0.0024,
    noiseScaleY: 0.0036,
    speedMult: 0.9,
    puffChars: ['-', '·', '~', '°', 'c'],
    darkPalette: {
      rim: [244, 114, 182],    // sunset rose/coral
      core: [255, 235, 225],    // warm twilight white
      telemetry: '244, 114, 182'
    },
    lightPalette: {
      rim: [236, 72, 153],     // soft sunset rose/pink
      core: [147, 51, 234],     // subtle twilight purple
      telemetry: '192, 38, 211'
    },
    telemetry: [
      "[CREPUSCULAR]",
      "[TWILIGHT.DECAY]",
      "✦ EVENING-HAZE",
      "[HORIZON.GLOW]",
      "[AZIMUTH: 284°]",
      "<DUSK.DRIFT>",
      "[SOLAR.ELEV: -2°]",
      "[GOLDEN-HOUR]"
    ]
  },
  night: {
    name: 'NIGHT',
    // Celestial starfield and sparse luminous cosmic cirrus
    ramp: [' ', '.', '·', ':', '✧', '*', '✦', '★', '○', '☽'],
    densityCutoff: 0.36,
    densityExponent: 1.5,
    noiseScaleX: 0.0030,
    noiseScaleY: 0.0030,
    speedMult: 0.65,
    puffChars: ['✦', '✧', '★', '·', '*', '·'],
    darkPalette: {
      rim: [96, 165, 250],     // deep nocturnal sapphire / celestial glow
      core: [240, 248, 255],    // pure starlight / lunar silver
      telemetry: '96, 165, 250'
    },
    lightPalette: {
      rim: [99, 102, 241],      // soft celestial periwinkle/indigo
      core: [67, 56, 202],      // deep nocturnal slate
      telemetry: '79, 70, 229'
    },
    telemetry: [
      "[LUNAR.PHASE]",
      "⁕ ⁖ ⁘ NEBULA",
      "[STARFIELD.NAV]",
      "✦ DEEP.SKY: CLEAR",
      "[NOCTURNAL.DRIFT]",
      "✧ CASSIOPEIA",
      "<ZENITH.ORBIT>",
      "[ORBITAL.VEIL]"
    ]
  }
};

// Backward-compatibility aliases for HMR and fallback safety
export const CLOUD_ASCII_RAMP = SKY_THEMES.day.ramp;
export const TELEMETRY_PHRASES = SKY_THEMES.day.telemetry;

// Resolves phase based on visitor's local hour (or URL parameter ?time=dawn|day|dusk|night)
function getSkyPhase() {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const override = params.get('time')?.toLowerCase();
    if (override && SKY_THEMES[override]) {
      return override;
    }
  }

  const hour = new Date().getHours();
  if (hour >= 5 && hour < 8) return 'dawn';
  if (hour >= 8 && hour < 17) return 'day';
  if (hour >= 17 && hour < 20) return 'dusk';
  return 'night';
}

// Compact smooth 2D value noise for procedural cumulus cloud FBM
function hash2d(x, y) {
  let n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return n - Math.floor(n);
}

function smoothNoise(x, y) {
  const i = Math.floor(x);
  const j = Math.floor(y);
  const fx = x - i;
  const fy = y - j;

  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);

  const n00 = hash2d(i, j);
  const n10 = hash2d(i + 1, j);
  const n01 = hash2d(i, j + 1);
  const n11 = hash2d(i + 1, j + 1);

  return (n00 * (1 - ux) + n10 * ux) * (1 - uy) + (n01 * (1 - ux) + n11 * ux) * uy;
}

function fbmCloud(x, y, time) {
  let val = 0;
  let amp = 0.54;
  let freq = 1.0;

  for (let o = 0; o < 4; o++) {
    val += amp * smoothNoise(x * freq + time * 0.030, y * freq - time * 0.006);
    freq *= 2.05;
    amp *= 0.48;
  }

  // Billow transformation: creates cauliflower-like puffy cumulus tops
  // and distinct separated cloud masses
  const billow = 1.0 - Math.abs(val - 0.52) * 1.95;
  return Math.max(0, val * 0.55 + billow * 0.45);
}

const SideAsciiSpace = () => {
  const canvasRef = useRef(null);
  const [selectedPhase, setSelectedPhase] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search).get('time')?.toLowerCase();
      if (p && SKY_THEMES[p]) return p;
    }
    return 'auto';
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;

    const fontSize = 10;
    const font = `${fontSize}px 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace`;

    let phase = selectedPhase === 'auto' ? getSkyPhase() : selectedPhase;
    let currentTheme = SKY_THEMES[phase] || SKY_THEMES.day;
    let lastPhaseCheck = Date.now();

    let floatingPuffs = [];
    let telemetries = [];

    let scrollY = window.scrollY;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      ctx.font = font;
      ctx.textBaseline = 'top';

      initScene();
    };

    const initScene = () => {
      floatingPuffs = [];
      telemetries = [];

      const containerWidth = 860;
      const leftGutterWidth = Math.max(0, (width - containerWidth) / 2 - 20);
      const rightGutterStart = (width + containerWidth) / 2 + 20;

      if (width < 1050 || leftGutterWidth < 60) return;

      // Generate floating wispy cloud particles or twinkling celestial stars
      const numPuffs = phase === 'night' ? 48 : 38;
      for (let i = 0; i < numPuffs; i++) {
        const isLeft = i % 2 === 0;
        const x = isLeft
          ? Math.random() * (leftGutterWidth - 40) + 20
          : rightGutterStart + Math.random() * (width - rightGutterStart - 40) + 20;

        const char = currentTheme.puffChars[Math.floor(Math.random() * currentTheme.puffChars.length)];

        floatingPuffs.push({
          x,
          y: Math.random() * (height + 200) - 100,
          driftSpeed: (Math.random() * 0.12 + 0.04) * currentTheme.speedMult,
          char,
          baseOpacity: Math.random() * 0.35 + 0.15,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.04 + 0.015
        });
      }

      spawnTelemetry(leftGutterWidth, rightGutterStart);
    };

    const spawnTelemetry = (leftGutterWidth, rightGutterStart) => {
      const side = Math.random() > 0.5 ? 'left' : 'right';

      // 35% chance to display live visitor local clock
      let text;
      if (Math.random() < 0.35) {
        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        text = `[LOCAL-TIME ${timeStr}]`;
      } else {
        const phrases = currentTheme?.telemetry || TELEMETRY_PHRASES;
        text = phrases[Math.floor(Math.random() * phrases.length)];
      }

      let minX = 16;
      let maxX = leftGutterWidth - 120;
      if (side === 'right') {
        minX = rightGutterStart + 16;
        maxX = width - 120;
      }

      if (maxX > minX) {
        telemetries.push({
          x: minX + Math.random() * (maxX - minX),
          y: Math.random() * (height - 120) + 60,
          text,
          opacity: 0,
          maxOpacity: Math.random() * 0.32 + 0.15,
          fadeState: 'in',
          timer: 0,
          holdTime: Math.random() * 220 + 160
        });
      }
    };

    let frameCount = 0;
    let lastFrameTime = 0;
    const targetInterval = 1000 / 38; // ~38 FPS frame pacing: smooth drift while saving CPU
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = (currentTime = 0) => {
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }

      // Frame pacing throttle
      if (currentTime - lastFrameTime < targetInterval) return;
      lastFrameTime = currentTime;

      frameCount++;

      // Check phase transition once every 60 seconds if in auto mode
      const now = Date.now();
      if (selectedPhase === 'auto' && now - lastPhaseCheck > 60000) {
        lastPhaseCheck = now;
        const newPhase = getSkyPhase();
        if (newPhase !== phase) {
          phase = newPhase;
          currentTheme = SKY_THEMES[phase] || SKY_THEMES.day;
        }
      }

      ctx.clearRect(0, 0, width, height);

      const containerWidth = 860;
      const leftGutterWidth = Math.max(0, (width - containerWidth) / 2 - 20);
      const rightGutterStart = (width + containerWidth) / 2 + 20;

      if (width >= 1050 && leftGutterWidth >= 60) {
        const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
        const palette = isLightTheme ? currentTheme.lightPalette : currentTheme.darkPalette;

        // Grid resolution for cloud dither texture
        const stepX = 9;
        const stepY = 12;
        const time = frameCount * 0.009 * currentTheme.speedMult;

        const fadeMarginL = Math.min(80, leftGutterWidth * 0.45);
        const rightGutterWidth = width - rightGutterStart;
        const fadeMarginR = Math.min(80, rightGutterWidth * 0.45);

        // 1. Render Billowy Volumetric Cloud Field in Left Gutter
        for (let y = 6; y < height; y += stepY) {
          for (let x = 6; x < leftGutterWidth; x += stepX) {
            const innerFade = Math.min(1, Math.max(0, (leftGutterWidth - x) / fadeMarginL));
            const outerFade = Math.min(1, Math.max(0, x / 30));
            const fadeX = innerFade * outerFade;
            drawCloudCell(x, y, time, palette, fadeX, isLightTheme);
          }
        }

        // Render Billowy Volumetric Cloud Field in Right Gutter
        for (let y = 6; y < height; y += stepY) {
          for (let x = rightGutterStart; x < width; x += stepX) {
            const innerFade = Math.min(1, Math.max(0, (x - rightGutterStart) / fadeMarginR));
            const outerFade = Math.min(1, Math.max(0, (width - x) / 30));
            const fadeX = innerFade * outerFade;
            drawCloudCell(x, y, time, palette, fadeX, isLightTheme);
          }
        }

        // 2. Render Wispy Cloud Tendril Puffs / Twinkling Stars
        floatingPuffs.forEach((puff) => {
          puff.y -= puff.driftSpeed;
          if (puff.y < -100) puff.y = height + 100;

          const py = (puff.y - scrollY * 0.06) % (height + 200);
          const currentY = py < -100 ? py + height + 200 : py;

          let gutterFade = 0;
          if (puff.x < leftGutterWidth) {
            const innerFade = Math.min(1, Math.max(0, (leftGutterWidth - puff.x) / fadeMarginL));
            const outerFade = Math.min(1, Math.max(0, puff.x / 30));
            gutterFade = innerFade * outerFade;
          } else if (puff.x > rightGutterStart) {
            const innerFade = Math.min(1, Math.max(0, (puff.x - rightGutterStart) / fadeMarginR));
            const outerFade = Math.min(1, Math.max(0, (width - puff.x) / 30));
            gutterFade = innerFade * outerFade;
          }

          if (gutterFade > 0.05) {
            let puffOpacity = puff.baseOpacity;
            if (phase === 'night') {
              puff.twinklePhase += puff.twinkleSpeed;
              const twinkle = 0.5 + 0.5 * Math.sin(puff.twinklePhase);
              puffOpacity = puff.baseOpacity * (0.55 + 0.65 * twinkle);
            }

            const finalPuffOpacity = puffOpacity * (isLightTheme ? 0.38 : 0.60) * gutterFade;
            const pColor = isLightTheme ? palette.core : palette.rim;
            ctx.shadowBlur = 0;
            ctx.fillStyle = `rgba(${pColor[0]}, ${pColor[1]}, ${pColor[2]}, ${finalPuffOpacity.toFixed(3)})`;
            ctx.fillText(puff.char, puff.x, currentY);
          }
        });

        // 3. Render Telemetry Labels
        if (frameCount % 320 === 0 && telemetries.length < 2) {
          spawnTelemetry(leftGutterWidth, rightGutterStart);
        }

        telemetries.forEach((t, idx) => {
          if (t.fadeState === 'in') {
            t.opacity += 0.005;
            if (t.opacity >= t.maxOpacity) t.fadeState = 'hold';
          } else if (t.fadeState === 'hold') {
            t.timer++;
            if (t.timer >= t.holdTime) t.fadeState = 'out';
          } else if (t.fadeState === 'out') {
            t.opacity -= 0.005;
            if (t.opacity <= 0) {
              telemetries.splice(idx, 1);
              return;
            }
          }

          if (t.x < leftGutterWidth - 20 || t.x > rightGutterStart + 10) {
            const finalTOpacity = t.opacity * (isLightTheme ? 0.40 : 0.50);
            ctx.shadowBlur = 0;
            ctx.fillStyle = `rgba(${palette.telemetry}, ${finalTOpacity.toFixed(3)})`;
            ctx.fillText(t.text, t.x, t.y - scrollY * 0.04);
          }
        });
      }
    };

    // Evaluates FBM cloud density field and renders dual-tone stippled ASCII cloud cell
    const drawCloudCell = (x, y, time, palette, fadeX, isLightTheme) => {
      if (fadeX <= 0.01) return;

      const nx = x * currentTheme.noiseScaleX;
      const ny = (y + scrollY * 0.08) * currentTheme.noiseScaleY;

      const rawNoise = fbmCloud(nx, ny, time);
      if (rawNoise <= currentTheme.densityCutoff) return;

      const cloudDensity = Math.pow(
        (rawNoise - currentTheme.densityCutoff) / (1 - currentTheme.densityCutoff),
        currentTheme.densityExponent
      );

      if (cloudDensity <= 0.02) return;

      const ramp = currentTheme?.ramp || CLOUD_ASCII_RAMP;
      const rampIdx = Math.min(ramp.length - 1, Math.floor(cloudDensity * ramp.length));
      const char = ramp[rampIdx];

      if (char === ' ') return;

      // Dual-tone blend: rim (sky contour at wispy edges) -> core (cloud body)
      const t = Math.max(0, Math.min(1, (cloudDensity - 0.04) / 0.55));
      const r = Math.round(palette.rim[0] + (palette.core[0] - palette.rim[0]) * t);
      const g = Math.round(palette.rim[1] + (palette.core[1] - palette.rim[1]) * t);
      const b = Math.round(palette.rim[2] + (palette.core[2] - palette.rim[2]) * t);

      // Smooth opacity curve with no artificial floor:
      // Clouds feather gracefully from wispy edges to comfortable core
      const maxOp = isLightTheme ? 0.42 : 0.55;
      const opacity = Math.pow(cloudDensity, 1.15) * maxOp * fadeX;

      if (opacity < 0.02) return;

      // Crisp rendering with zero blur for clean readability
      ctx.shadowBlur = 0;
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity.toFixed(3)})`;
      ctx.fillText(char, x, y);
    };

    // Pause animation when tab is inactive to preserve 100% CPU/GPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      } else {
        lastFrameTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [selectedPhase]);

  return (
    <>
      <canvas ref={canvasRef} className="side-ascii-canvas" aria-hidden="true" />
      <div className="sky-phase-control" aria-label="Sky Time Preview">
        <span className="sky-control-icon">☁</span>
        <span className="sky-control-title">SKY:</span>
        {(['auto', 'dawn', 'day', 'dusk', 'night']).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setSelectedPhase(p)}
            className={`sky-control-btn ${selectedPhase === p ? 'active' : ''}`}
          >
            {p.toUpperCase()}
          </button>
        ))}
      </div>
    </>
  );
};

export default SideAsciiSpace;
