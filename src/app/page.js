
import IsometricBox from '@/components/IsometricBox/IsometricBox';

export default function Page() {

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', gap: 16, padding: 24, backgroundColor: "red" }}>
      <IsometricBox
        size={183}
        depth={91}
        radius={0}
        tiltX={-20}
        tiltY={41}
        duration={16}
        autoRotate={true}
        shadowBlur={18}
        shadowOpacity={0}
        shadowScale={1.18}
      />

      
    </main>
  );
}