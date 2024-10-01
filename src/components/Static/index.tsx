import React from "react";

interface StaticNoiseProps {
  children: React.ReactNode;
}

export function StaticNoise({ children }: StaticNoiseProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/images/static.gif')] bg-repeat opacity-[0.02]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
