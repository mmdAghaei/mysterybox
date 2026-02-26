'use client';

import { motion } from 'framer-motion';
import styles from './IsometricBox.module.css';

export default function IsometricBox({
  size = 260,
  depth = null,
  radius = 18,
  perspective = 1200,
  perspectiveOrigin = '50% 42%',
  folder = "svg",
  tiltX = -55,
  tiltY = 45,

  autoRotate = true,
  duration = 14,
  direction = 1,

  float = true,
  floatAmp = 6,
  floatDuration = 5,

  shadowScale = 1.12,      // کنترل اندازه سایه
  shadowBlur = 16,         // کنترل blur
  shadowOpacity = 0.30,    // کنترل شدت

  className = '',
}) {
  const d = depth ?? size / 2;

  const rotateAnim = autoRotate
    ? { rotateY: [tiltY, tiltY + 360 * direction] }
    : { rotateY: tiltY };

  const rotateTrans = autoRotate
    ? { rotateY: { duration, repeat: Infinity, ease: 'linear' } }
    : {};

  return (
    <div
      className={[styles.scene, className].filter(Boolean).join(' ')}
      style={{
        '--s': `${size}px`,
        '--d': `${d}px`,
        '--r': `${radius}px`,
        '--shadowScale': shadowScale,
        '--shadowBlur': `${shadowBlur}px`,
        '--shadowOpacity': shadowOpacity,
        perspective: `${perspective}px`,
        perspectiveOrigin,
      }}
    >
      {/* ✅ سایه روی زمین (ثابت، بدون چرخش) */}
      <motion.div
        className={styles.groundShadow}
        animate={
          float
            ? {
              scale: [1, 0.92, 1],
              opacity: [shadowOpacity, shadowOpacity * 0.65, shadowOpacity],
            }
            : { scale: 1, opacity: shadowOpacity }
        }
        transition={
          float
            ? { duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }
            : undefined
        }
      />

      {/* مکعب */}
      <motion.div
        className={styles.bob}
        animate={float ? { y: [0, -floatAmp, 0] } : { y: 0 }}
        transition={float ? { duration: floatDuration, repeat: Infinity, ease: 'easeInOut' } : undefined}
      >
        <motion.div
          className={styles.cube}
          initial={{ opacity: 0, y: 8 }}
          animate={{ ...rotateAnim, rotateX: tiltX, opacity: 1, y: 0 }}
          transition={{ ...rotateTrans, opacity: { duration: 0.25 }, y: { duration: 0.25 } }}
        >
          <div className={`${styles.face} ${styles.top}`}><img src={`/${folder}/face1.svg`} alt="" draggable={false} /></div>
          <div className={`${styles.face} ${styles.bottom}`}><img src={`/${folder}/face2.svg`} alt="" draggable={false} /></div>
          <div className={`${styles.face} ${styles.front}`}><img src={`/${folder}/face3.svg`} alt="" draggable={false} /></div>
          <div className={`${styles.face} ${styles.back}`}><img src={`/${folder}/face4.svg`} alt="" draggable={false} /></div>
          <div className={`${styles.face} ${styles.right}`}><img src={`/${folder}/face5.svg`} alt="" draggable={false} /></div>
          <div className={`${styles.face} ${styles.left}`}><img src={`/${folder}/face6.svg`} alt="" draggable={false} /></div>
        </motion.div>
      </motion.div>
    </div>
  );
}