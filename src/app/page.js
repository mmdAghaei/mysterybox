"use client";
import IsometricBox from '@/components/IsometricBox/IsometricBox';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  useEffect(
    () => {
      router.replace("/home");

    }
  );

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', gap: 16, padding: 24, backgroundColor: "red" }}>


    </main>
  );
}