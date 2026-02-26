import IsometricBox from "@/components/IsometricBox/IsometricBox";

export default function Home() {

    return (
        <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
            <IsometricBox
                size={183}
                depth={91}
                radius={0}
                folder="svg/box-one"
                tiltX={-20}
                tiltY={41}
                duration={16}
                autoRotate={true}
                shadowBlur={18}
                shadowOpacity={0}
                shadowScale={1.18}
            />
        </div>
    );
}