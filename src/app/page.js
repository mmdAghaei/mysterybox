'use client';

import { useState } from 'react';
import IsometricBox from '@/components/IsometricBox/IsometricBox';

export default function Page() {
  const [tiltX, setTiltX] = useState(-55);
  const [tiltY, setTiltY] = useState(45);
  const [radius, setRadius] = useState(18);
  const [size, setSize] = useState(280);
  const [duration, setDuration] = useState(16);
  const [depth, setDepth] = useState(140);
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', gap: 16, padding: 24 }}>
      <IsometricBox
        size={size}
        depth={depth}
        radius={radius}
        tiltX={tiltX}
        tiltY={tiltY}
        duration={duration}
        autoRotate={autoRotate}
      />

      <div style={{ width: 420, maxWidth: '90vw', display: 'grid', gap: 10 }}>
        <label>tiltX: {tiltX}
          <input type="range" min="-80" max="-20" value={tiltX} onChange={(e) => setTiltX(+e.target.value)} />
        </label>

        <label>tiltY: {tiltY}
          <input type="range" min="-180" max="180" value={tiltY} onChange={(e) => setTiltY(+e.target.value)} />
        </label>

        <label>radius: {radius}
          <input type="range" min="0" max="40" value={radius} onChange={(e) => setRadius(+e.target.value)} />
        </label>

        <label>size: {size}
          <input type="range" min="160" max="420" value={size} onChange={(e) => setSize(+e.target.value)} />
        </label>

        <label>depth: {depth}
          <input type="range" min="60" max="220" value={depth} onChange={(e) => setDepth(+e.target.value)} />
        </label>

        <label>duration (sec): {duration}
          <input type="range" min="4" max="40" value={duration} onChange={(e) => setDuration(+e.target.value)} />
        </label>

        <label style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <input type="checkbox" checked={autoRotate} onChange={(e) => setAutoRotate(e.target.checked)} />
          Auto Rotate
        </label>
      </div>
    </main>
  );
}