"use client"; // Add this line to mark the component as a Client Component

import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /home when visiting /
    router.push('/home');
  }, [router]);

  return null; // Since the user is redirected, no need to render anything
}
