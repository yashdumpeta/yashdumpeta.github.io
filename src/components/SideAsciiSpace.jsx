import React, { useEffect, useRef } from 'react';
import './SideAsciiSpace.css';

// Atmospheric phase profiles based on visitor's local time of day
const SKY_THEMES = {
  dawn: {
    name: 'DAWN',
    // Soft, airy morning mist and dew
    ramp: [' ', '.', '·', '°', '░', '▒', ':', '~', '≈', '⁕', '✦'],
    densityCutoff: 0.24,
    densityExponent: 1.5,
    noiseScaleX: 0.0028,
    noiseScaleY: 0.0045, // horizontally stretched mist layers
    speedMult: 0.85,
    puffChars: ['·', '°', '⁕', '~'],
    darkRgb: '245, 212, 190', // soft sunrise peach / amber tint
    lightRgb: '75, 55, 50',
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
    // Rich volumetric cumulus clouds
    ramp: [' ', '.', '·', '°', ':', '-', '=', '+', 'i', 'x', '*', '%', 'S', '#', 'W', '@', '✦'],
    densityCutoff: 0.28,
    densityExponent: 1.4,
    noiseScaleX: 0.0035,
    noiseScaleY: 0.0035,
    speedMult: 1.0,
    puffChars: ['°', '·'],
    darkRgb: '212, 212, 216', // neutral crisp slate
    lightRgb: '30, 41, 59',
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
    ramp: [' ', '.', '·', '—', '-', '=', '≡', '░', '▒', '▓', '✦'],
    densityCutoff: 0.26,
    densityExponent: 1.45,
    noiseScaleX: 0.004,
    noiseScaleY: 0.0026, // horizontal sunset cloud bands
    speedMult: 0.9,
    puffChars: ['-', '·', '~', '°'],
    darkRgb: '235, 185, 175', // warm twilight rose / amber
    lightRgb: '70, 42, 60',
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
    ramp: [' ', '.', '·', ':', '✧', '*', '✦', '★', '○', '☽', '✦'],
    densityCutoff: 0.36, // higher cutoff so sky remains mostly open starfield with wispy nebulae
    densityExponent: 1.6,
    noiseScaleX: 0.0032,
    noiseScaleY: 0.0032,
    speedMult: 0.65, // slow hypnotic nocturnal drift
    puffChars: ['✦', '✧', '★', '·', '*', '·'],
    darkRgb: '180, 205, 245', // cool starlight / indigo tint
    lightRgb: '25, 40, 75',
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
  let amp = 0.52;
  let freq = 1.0;

  // Slightly increased time evolution speed for dynamic cloud flow
  for (let o = 0; o < 4; o++) {
    val += amp * smoothNoise(x * freq + time * 0.024, y * freq - time * 0.016);
    freq *= 2.05;
    amp *= 0.48;
  }

  return val;
}

const SideAsciiSpace = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;

    const fontSize = 10;
    const font = `${fontSize}px 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace`;

    let phase = getSkyPhase();
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
      const numPuffs = phase === 'night' ? 52 : 42;
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
          baseOpacity: Math.random() * 0.30 + 0.12,
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

      // Check phase transition once every 60 seconds (for visitors staying through hour shifts)
      const now = Date.now();
      if (now - lastPhaseCheck > 60000) {
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
        const baseRgb = isLightTheme ? currentTheme.lightRgb : currentTheme.darkRgb;

        // Grid resolution for cloud dither texture
        const stepX = 9;
        const stepY = 12;
        const time = frameCount * 0.009 * currentTheme.speedMult;

        // 1. Render Billowy Volumetric Cloud Field in ASCII
        for (let y = 6; y < height; y += stepY) {
          for (let x = 6; x < leftGutterWidth; x += stepX) {
            drawCloudCell(x, y, time, baseRgb, isLightTheme ? 1.25 : 1.0);
          }
          for (let x = rightGutterStart; x < width; x += stepX) {
            drawCloudCell(x, y, time, baseRgb, isLightTheme ? 1.25 : 1.0);
          }
          // Ultra faint cloud connection trace across central content
          for (let x = leftGutterWidth + 14; x < rightGutterStart - 14; x += stepX * 2) {
            drawCloudCell(x, y, time, baseRgb, isLightTheme ? 0.12 : 0.08);
          }
        }

        // 2. Render Wispy Cloud Tendril Puffs / Twinkling Stars
        floatingPuffs.forEach((puff) => {
          puff.y -= puff.driftSpeed;
          if (puff.y < -100) puff.y = height + 100;

          const py = (puff.y - scrollY * 0.06) % (height + 200);
          const currentY = py < -100 ? py + height + 200 : py;

          if (puff.x < leftGutterWidth || puff.x > rightGutterStart) {
            let puffOpacity = puff.baseOpacity;
            if (phase === 'night') {
              // Gentle twinkle for stars
              puff.twinklePhase += puff.twinkleSpeed;
              const twinkle = 0.5 + 0.5 * Math.sin(puff.twinklePhase);
              puffOpacity = puff.baseOpacity * (0.55 + 0.65 * twinkle);
            }

            const finalPuffOpacity = isLightTheme ? puffOpacity * 1.3 : puffOpacity;
            ctx.fillStyle = `rgba(${baseRgb}, ${finalPuffOpacity.toFixed(3)})`;
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

          if (t.x < leftGutterWidth || t.x > rightGutterStart) {
            const finalTOpacity = isLightTheme ? Math.max(0, t.opacity) * 1.2 : Math.max(0, t.opacity);
            ctx.fillStyle = `rgba(${baseRgb}, ${finalTOpacity.toFixed(3)})`;
            ctx.fillText(t.text, t.x, t.y - scrollY * 0.04);
          }
        });
      }
    };

    // Evaluates FBM cloud density field and renders stippled ASCII cloud cell
    const drawCloudCell = (x, y, time, baseRgb, mult) => {
      const nx = x * currentTheme.noiseScaleX;
      const ny = (y + scrollY * 0.08) * currentTheme.noiseScaleY;

      const rawNoise = fbmCloud(nx, ny, time);
      const cloudDensity = Math.pow(
        Math.max(0, rawNoise - currentTheme.densityCutoff) / (1 - currentTheme.densityCutoff),
        currentTheme.densityExponent
      );

      if (cloudDensity > 0.04) {
        const ramp = currentTheme.ramp;
        const rampIdx = Math.floor(cloudDensity * (ramp.length - 1));
        const char = ramp[rampIdx];

        if (char !== ' ') {
          const opacity = Math.max(0.04, Math.min(0.55, cloudDensity * 0.50 * mult));
          ctx.fillStyle = `rgba(${baseRgb}, ${opacity.toFixed(3)})`;
          ctx.fillText(char, x, y);
        }
      }
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
  }, []);

  return <canvas ref={canvasRef} className="side-ascii-canvas" aria-hidden="true" />;
};

export default SideAsciiSpace;
