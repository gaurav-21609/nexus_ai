"use client";
import { Html } from "@react-three/drei";

export function LoadingScreen() {
  return (
    <Html>
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-blue-400 font-semibold">Loading Experience...</p>
        </div>
      </div>
    </Html>
  );
}
