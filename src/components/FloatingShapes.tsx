import React from "react";

type ShapeConfig = {
  type: "triangle" | "circle" | "box" | "hexa" | "cross" | "arrowUp";
  width: number;
  color: string;
  left: string;
  top: string;
  stroke?: boolean;
  animation: "float" | "float-wide" | "none";
  opacity?: number;
  hiddenMobile?: boolean;
};

// SVG shape renderers
const Triangle = ({ stroke }: { stroke: boolean }) =>
  stroke ? (
    <polygon points="15,1 29,29 1,29" fill="none" strokeWidth="2" />
  ) : (
    <polygon points="15,1 29,29 1,29" />
  );

const Circle = ({ stroke }: { stroke: boolean }) =>
  stroke ? (
    <circle cx="15" cy="15" r="13" fill="none" strokeWidth="2" />
  ) : (
    <circle cx="15" cy="15" r="15" />
  );

const Box = ({ stroke }: { stroke: boolean }) =>
  stroke ? (
    <rect x="2" y="2" width="26" height="26" fill="none" strokeWidth="2" />
  ) : (
    <rect x="0" y="0" width="30" height="30" />
  );

const Hexa = ({ stroke }: { stroke: boolean }) =>
  stroke ? (
    <polygon
      points="15,1 28,8 28,22 15,29 2,22 2,8"
      fill="none"
      strokeWidth="2"
    />
  ) : (
    <polygon points="15,1 28,8 28,22 15,29 2,22 2,8" />
  );

const Cross = () => (
  <>
    <line x1="20" y1="80" x2="80" y2="20" strokeWidth="10" />
    <line x1="20" y1="20" x2="80" y2="80" strokeWidth="10" />
  </>
);

const ArrowUp = () => (
  <>
    <line x1="15" y1="42" x2="15" y2="0" strokeWidth="2" />
    <polyline points="5,12 15,0 25,12" fill="none" strokeWidth="2" />
    <line x1="15" y1="26" x2="15" y2="42" strokeWidth="2" />
    <polyline points="5,30 15,42 25,30" fill="none" strokeWidth="2" />
  </>
);

function Shape({ config }: { config: ShapeConfig }) {
  const {
    type,
    width,
    color,
    left,
    top,
    stroke = false,
    animation,
    opacity = 1,
    hiddenMobile = false,
  } = config;

  const viewBoxes = {
    triangle: "0 0 30 30",
    circle: "0 0 30 30",
    box: "0 0 30 30",
    hexa: "0 0 30 30",
    cross: "0 0 100 100",
    arrowUp: "0 0 30 44",
  };

  const animClass =
    animation === "float"
      ? "cara-float"
      : animation === "float-wide"
        ? "cara-float-wide"
        : "";

  return (
    <svg
      viewBox={viewBoxes[type]}
      style={{
        position: "absolute",
        left,
        top,
        width,
        height: width,
        color,
        fill: stroke ? "none" : "currentColor",
        stroke: stroke ? "currentColor" : "none",
        opacity,
        display: hiddenMobile ? undefined : "block",
        pointerEvents: "none",
      }}
      className={`${animClass} ${hiddenMobile ? "hidden md:block" : ""}`}
    >
      {type === "triangle" && <Triangle stroke={stroke} />}
      {type === "circle" && <Circle stroke={stroke} />}
      {type === "box" && <Box stroke={stroke} />}
      {type === "hexa" && <Hexa stroke={stroke} />}
      {type === "cross" && <Cross />}
      {type === "arrowUp" && <ArrowUp />}
    </svg>
  );
}

// Color palette matching Cara theme
export const CARA_COLORS = {
  orange: "#ed8936",
  red: "#e53e3e",
  blue: "#3182ce",
  green: "#48bb78",
  purple: "#805ad5",
  pink: "#ed64a6",
  yellow: "#ecc94b",
  white: "#ffffff",
  darker: "#4a5568",
  darkest: "#2d3748",
  teal: "#319795",
};

// Hero section shapes - matches Cara Hero component
export const HERO_SHAPES: ShapeConfig[] = [
  // UpDown group
  {
    type: "triangle",
    width: 56,
    stroke: true,
    color: CARA_COLORS.orange,
    left: "10%",
    top: "20%",
    animation: "float",
    hiddenMobile: true,
  },
  {
    type: "hexa",
    width: 48,
    stroke: true,
    color: CARA_COLORS.red,
    left: "60%",
    top: "70%",
    animation: "float",
  },
  {
    type: "box",
    width: 6,
    color: CARA_COLORS.darkest,
    left: "60%",
    top: "15%",
    animation: "float",
  },
  // UpDownWide group
  {
    type: "arrowUp",
    width: 16,
    color: CARA_COLORS.blue,
    left: "80%",
    top: "10%",
    animation: "float-wide",
    hiddenMobile: true,
  },
  {
    type: "triangle",
    width: 12,
    stroke: true,
    color: CARA_COLORS.white,
    left: "90%",
    top: "50%",
    animation: "float-wide",
    opacity: 0.7,
  },
  {
    type: "circle",
    width: 16,
    color: CARA_COLORS.darkest,
    left: "70%",
    top: "90%",
    animation: "float-wide",
  },
  {
    type: "triangle",
    width: 16,
    stroke: true,
    color: CARA_COLORS.darkest,
    left: "30%",
    top: "65%",
    animation: "float-wide",
    opacity: 0.6,
  },
  {
    type: "cross",
    width: 16,
    stroke: true,
    color: CARA_COLORS.pink,
    left: "28%",
    top: "15%",
    animation: "float-wide",
  },
  {
    type: "circle",
    width: 6,
    color: CARA_COLORS.darkest,
    left: "75%",
    top: "10%",
    animation: "float-wide",
  },
  // Static shapes
  {
    type: "circle",
    width: 24,
    color: CARA_COLORS.darker,
    left: "5%",
    top: "70%",
    animation: "none",
    hiddenMobile: true,
  },
  {
    type: "circle",
    width: 6,
    color: CARA_COLORS.darkest,
    left: "4%",
    top: "20%",
    animation: "none",
  },
  {
    type: "circle",
    width: 12,
    color: CARA_COLORS.darkest,
    left: "50%",
    top: "60%",
    animation: "none",
  },
  {
    type: "triangle",
    width: 8,
    stroke: true,
    color: CARA_COLORS.darker,
    left: "25%",
    top: "5%",
    animation: "none",
  },
  {
    type: "circle",
    width: 64,
    color: CARA_COLORS.green,
    left: "95%",
    top: "5%",
    animation: "none",
    opacity: 0.5,
  },
  {
    type: "box",
    width: 64,
    color: CARA_COLORS.purple,
    left: "5%",
    top: "90%",
    animation: "none",
    hiddenMobile: true,
    opacity: 0.5,
  },
//   {
//     type: "box",
//     width: 12,
//     color: CARA_COLORS.darkest,
//     left: "40%",
//     top: "30%",
//     animation: "none",
//   },
  {
    type: "hexa",
    width: 16,
    stroke: true,
    color: CARA_COLORS.darker,
    left: "10%",
    top: "50%",
    animation: "none",
  },
];

// Projects section shapes
export const PROJECTS_SHAPES: ShapeConfig[] = [
  {
    type: "box",
    width: 6,
    color: CARA_COLORS.white,
    left: "85%",
    top: "75%",
    animation: "float",
    opacity: 0.5,
  },
  {
    type: "triangle",
    width: 8,
    stroke: true,
    color: CARA_COLORS.orange,
    left: "25%",
    top: "5%",
    animation: "float",
  },
  {
    type: "circle",
    width: 24,
    color: CARA_COLORS.white,
    left: "17%",
    top: "60%",
    animation: "float",
    hiddenMobile: true,
    opacity: 0.3,
  },
  {
    type: "triangle",
    width: 12,
    stroke: true,
    color: CARA_COLORS.white,
    left: "90%",
    top: "30%",
    animation: "float-wide",
    opacity: 0.5,
  },
  {
    type: "circle",
    width: 16,
    color: CARA_COLORS.yellow,
    left: "70%",
    top: "90%",
    animation: "float-wide",
    opacity: 0.6,
  },
  {
    type: "circle",
    width: 6,
    color: CARA_COLORS.white,
    left: "75%",
    top: "10%",
    animation: "float-wide",
    opacity: 0.5,
  },
  {
    type: "circle",
    width: 6,
    color: CARA_COLORS.white,
    left: "4%",
    top: "20%",
    animation: "none",
    opacity: 0.4,
  },
  {
    type: "circle",
    width: 12,
    color: CARA_COLORS.pink,
    left: "80%",
    top: "60%",
    animation: "none",
    opacity: 0.7,
  },
  {
    type: "box",
    width: 6,
    color: CARA_COLORS.orange,
    left: "10%",
    top: "10%",
    animation: "none",
    opacity: 0.7,
  },
  {
    type: "hexa",
    width: 16,
    stroke: true,
    color: CARA_COLORS.red,
    left: "75%",
    top: "30%",
    animation: "none",
    opacity: 0.7,
  },
];

// About / general section shapes
export const ABOUT_SHAPES: ShapeConfig[] = [
  {
    type: "triangle",
    width: 32,
    stroke: true,
    color: CARA_COLORS.orange,
    left: "80%",
    top: "20%",
    animation: "float",
    opacity: 0.6,
    hiddenMobile: true,
  },
  {
    type: "circle",
    width: 24,
    color: CARA_COLORS.purple,
    left: "4%",
    top: "60%",
    animation: "float-wide",
    opacity: 0.4,
    hiddenMobile: true,
  },
  {
    type: "hexa",
    width: 12,
    stroke: true,
    color: CARA_COLORS.blue,
    left: "85%",
    top: "65%",
    animation: "float-wide",
    opacity: 0.5,
    hiddenMobile: true,
  },
  {
    type: "box",
    width: 8,
    color: CARA_COLORS.darkest,
    left: "55%",
    top: "10%",
    animation: "float",
    opacity: 0.5,
  },
  {
    type: "cross",
    width: 20,
    stroke: true,
    color: CARA_COLORS.orange,
    left: "90%",
    top: "80%",
    animation: "float-wide",
    opacity: 0.5,
    hiddenMobile: true,
  },
];

interface FloatingShapesProps {
  shapes?: ShapeConfig[];
  className?: string;
}

export default function FloatingShapes({
  shapes = HERO_SHAPES,
  className = "",
}: FloatingShapesProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {shapes.map((shape, i) => (
        <Shape key={i} config={shape} />
      ))}
    </div>
  );
}
