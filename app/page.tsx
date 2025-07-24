"use client";

import NavBar from "@/components/ui/NavBar";
import HyperText from "@/components/ui/hyper-text";
import Particles from "@/components/ui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative min-h-screen">
      <NavBar />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <main className="flex flex-col items-center justify-center p-10 space-y-6">
        <HyperText
          className="text-4xl font-bold text-black dark:text-white text-center"
          text="Scheduling Algorithm Simulator"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/cpu"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition text-center"
          >
            CPU Scheduling
          </Link>
          <Link
            href="/disk"
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition text-center"
          >
            Disk Scheduling
          </Link>
          <Link
            href="/page"
            className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition text-center"
          >
            Page Replacement
          </Link>
          <Link
            href="/deadlock"
            className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition text-center"
          >
            Deadlock Simulation
          </Link>
        </div>
      </main>
    </div>
  );
}
