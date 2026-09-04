import React, { useEffect, useRef } from 'react';
import './SideAsciiSpace.css';

// Rich dithered ASCII ramp for volumetric clouds
const CLOUD_ASCII_RAMP = [
  ' ', '.', '·', '°', ':', '-', '=', '+', 'i', 'x', '*', '%', 'S', '#', 'W', '@', '✦'
];

const TELEMETRY_PHRASES = [
  "[ALT.CUMULUS]",
  "10.4k FT",
  "[CLOUD.MASS]",
  "⁕ ⁖ ⁘ NEBULA",
  "[WIND-DRIFT: 7kt]",
  "✦ STRATUS-VEIL",
  "::: ATMOS-GRID :::",
  "<SKY.FLOW>"
];

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

      // Generate floating wispy cloud particles with slightly boosted drift speed
      const numPuffs = 45;
      for (let i = 0; i < numPuffs; i++) {
        const isLeft = i % 2 === 0;
        const x = isLeft
          ? Math.random() * (leftGutterWidth - 40) + 20
          : rightGutterStart + Math.random() * (width - rightGutterStart - 40) + 20;

        floatingPuffs.push({
          x,
          y: Math.random() * (height + 200) - 100,
          driftSpeed: Math.random() * 0.12 + 0.04,
          char: Math.random() > 0.5 ? '°' : '·',
          opacity: Math.random() * 0.30 + 0.12
        });
      }

      spawnTelemetry(leftGutterWidth, rightGutterStart);
    };

    const spawnTelemetry = (leftGutterWidth, rightGutterStart) => {
      const side = Math.random() > 0.5 ? 'left' : 'right';
      const text = TELEMETRY_PHRASES[Math.floor(Math.random() * TELEMETRY_PHRASES.length)];

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

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      const containerWidth = 860;
      const leftGutterWidth = Math.max(0, (width - containerWidth) / 2 - 20);
      const rightGutterStart = (width + containerWidth) / 2 + 20;

      if (width >= 1050 && leftGutterWidth >= 60) {
        const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
        // More apparent dark slate monotone color in light mode for crisp contrast
        const baseRgb = isLightTheme ? '30, 41, 59' : '212, 212, 216';

        // Grid resolution for cloud dither texture
        const stepX = 9;
        const stepY = 12;
        // Slightly increased time evolution multiplier for dynamic motion
        const time = frameCount * 0.009;

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

        // 2. Render Wispy Cloud Tendril Puffs
        floatingPuffs.forEach((puff) => {
          puff.y -= puff.driftSpeed;
          if (puff.y < -100) puff.y = height + 100;

          const py = (puff.y - scrollY * 0.06) % (height + 200);
          const currentY = py < -100 ? py + height + 200 : py;

          if (puff.x < leftGutterWidth || puff.x > rightGutterStart) {
            const finalPuffOpacity = isLightTheme ? puff.opacity * 1.3 : puff.opacity;
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

      animationFrameId = requestAnimationFrame(render);
    };

    // Evaluates FBM cloud density field and renders stippled ASCII cloud cell
    const drawCloudCell = (x, y, time, baseRgb, mult) => {
      const nx = x * 0.0035;
      const ny = (y + scrollY * 0.08) * 0.0035;

      const rawNoise = fbmCloud(nx, ny, time);
      const cloudDensity = Math.pow(Math.max(0, rawNoise - 0.28) / 0.72, 1.4);

      if (cloudDensity > 0.04) {
        const rampIdx = Math.floor(cloudDensity * (CLOUD_ASCII_RAMP.length - 1));
        const char = CLOUD_ASCII_RAMP[rampIdx];

        if (char !== ' ') {
          const opacity = Math.max(0.04, Math.min(0.55, cloudDensity * 0.50 * mult));
          ctx.fillStyle = `rgba(${baseRgb}, ${opacity.toFixed(3)})`;
          ctx.fillText(char, x, y);
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="side-ascii-canvas" aria-hidden="true" />;
};

export default SideAsciiSpace;
