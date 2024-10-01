import React from "react";

export const GridGuide = ({
  gap = 4,
  color = "blue",
  opacity = 5,
  maxWidth = "1536px",
}) => {
  // Only render in development mode and when NEXT_PUBLIC_SHOW_GRID_GUIDE is true
  if (
    process.env.NODE_ENV !== "development" ||
    process.env.NEXT_PUBLIC_SHOW_GRID_GUIDE !== "true"
  ) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 left-0 right-0 z-50 mx-auto"
      style={{ maxWidth }}
    >
      <div className={`grid h-full grid-cols-12 gap-${gap}`}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="relative h-full">
            <div
              className={`absolute inset-0 bg-${color}-500`}
              style={{ opacity: opacity / 100 }}
            />
            <div
              className={`absolute bottom-4 left-0 right-0 flex justify-center text-${color}-500 font-bold`}
              style={{ opacity: 0.8 }}
            >
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
