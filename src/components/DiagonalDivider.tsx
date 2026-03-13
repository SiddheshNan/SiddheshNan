import React from "react";

interface DiagonalDividerProps {
  /** gradient or solid background for this divider */
  bg?: string;
  /** direction of the diagonal */
  direction?: "left" | "right";
  /** height of the slant in px */
  slant?: number;
  className?: string;
}

/**
 * Renders an SVG wave/diagonal divider between sections,
 * inspired by the Cara Gatsby theme's Parallax layer dividers.
 */
export default function DiagonalDivider({
  bg = "linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)",
  direction = "left",
  slant = 80,
  className = "",
}: DiagonalDividerProps) {
  // polygon(x1 y1, x2 y2, x3 y3, x4 y4) clockwise
  // left‑high: top-left is raised, top-right is at 0
  // right-high: top-right is raised, top-left is at 0
  const clipPath =
    direction === "left"
      ? `polygon(0 0, 100% ${slant}px, 100% 100%, 0 100%)`
      : `polygon(0 ${slant}px, 100% 0, 100% 100%, 0 100%)`;

  return (
    <div
      className={`w-full overflow-hidden leading-none ${className}`}
      style={{ marginTop: `-${slant}px` }}
      aria-hidden="true"
    >
      <div
        style={{
          height: `${slant * 2}px`,
          background: bg,
          clipPath,
        }}
      />
    </div>
  );
}
