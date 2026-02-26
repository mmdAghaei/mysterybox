'use client';

import { motion } from 'framer-motion';
import styles from './IsometricBox.module.css';

export default function IsometricBox({
  size = 260,          // px
  depth = null,        // px (اگر null باشه => size/2)
  radius = 18,         // px border-radius
  perspective = 1200,  // px
  perspectiveOrigin = '50% 42%',

  tiltX = -55,         // زاویه دید از بالا
  tiltY = 45,          // زاویه شروع (yaw)

  autoRotate = true,
  duration = 14,       // ثانیه برای یک دور کامل
  direction = 1,       // 1 یا -1

  float = true,        // بالا/پایین شیک
  floatAmp = 6,
  floatDuration = 5,

  className = '',
}) {
  const d = depth ?? size / 2;

  const anim = autoRotate
    ? { rotateY: [tiltY, tiltY + 360 * direction] }
    : { rotateY: tiltY };

  const trans = autoRotate
    ? { rotateY: { duration, repeat: Infinity, ease: 'linear' } }
    : {};

  return (
    <div
      className={[styles.scene, className].filter(Boolean).join(' ')}
      style={{
        '--s': `${size}px`,
        '--d': `${d}px`,
        '--r': `${radius}px`,
        perspective: `${perspective}px`,
        perspectiveOrigin,
      }}
    >
      <motion.div
        className={styles.bob}
        animate={float ? { y: [0, -floatAmp, 0] } : { y: 0 }}
        transition={float ? { duration: floatDuration, repeat: Infinity, ease: 'easeInOut' } : undefined}
      >
        <motion.div
          className={styles.cube}
          initial={{ opacity: 0, y: 8 }}
          animate={{ ...anim, rotateX: tiltX, opacity: 1, y: 0 }}
          transition={{ ...trans, opacity: { duration: 0.25 }, y: { duration: 0.25 } }}
        >
          <div className={`${styles.face} ${styles.top}`}>
            <img src="/svg/face1.svg" alt="" draggable={false} />
          </div>

          <div className={`${styles.face} ${styles.bottom}`}>
            <img src="/svg/face2.svg" alt="" draggable={false} />
          </div>

          <div className={`${styles.face} ${styles.front}`}>
            <img src="/svg/face3.svg" alt="" draggable={false} />
          </div>

          <div className={`${styles.face} ${styles.back}`}>
            <img src="/svg/face4.svg" alt="" draggable={false} />
          </div>

          <div className={`${styles.face} ${styles.right}`}>
            <img src="/svg/face5.svg" alt="" draggable={false} />
          </div>

          <div className={`${styles.face} ${styles.left}`}>
            <img src="/svg/face6.svg" alt="" draggable={false} />
          </div>

          {/* سایه جداست (تا 3D فلت نشه) */}
          <div className={styles.shadow} />
        </motion.div>
      </motion.div>
    </div>
  );
}