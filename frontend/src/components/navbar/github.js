import React from "react";

const SVGComponent = (props) => (
  <svg viewBox="0 0 18 16" width="32px" {...props}>
    <path
      d="M 8 0 C 3.58 0 0 3.58 0 7.998 C 0 11.537 2.29 14.526 5.47 15.585 C 5.87 15.655 6.02 15.415 6.02 15.206 C 6.02 15.016 6.01 14.386 6.01 13.716 C 4 14.085 3.48 13.227 3.32 12.776 C 3.23 12.546 2.84 11.836 2.5 11.647 C 2.22 11.496 1.82 11.127 2.49 11.117 C 3.12 11.106 3.57 11.697 3.72 11.936 C 4.44 13.147 5.59 12.806 6.05 12.597 C 6.12 12.077 6.33 11.727 6.56 11.527 C 4.78 11.327 2.92 10.636 2.92 7.578 C 2.92 6.708 3.23 5.988 3.74 5.428 C 3.66 5.228 3.38 4.41 3.82 3.309 C 3.82 3.309 4.49 3.098 6.02 4.129 C 6.66 3.949 7.34 3.86 8.02 3.86 C 8.7 3.86 9.38 3.949 10.02 4.129 C 11.55 3.089 12.22 3.309 12.22 3.309 C 12.66 4.41 12.38 5.228 12.3 5.428 C 12.81 5.988 13.12 6.698 13.12 7.578 C 13.12 10.647 11.25 11.327 9.47 11.527 C 9.76 11.776 10.01 12.257 10.01 13.006 C 10.01 14.076 10 14.936 10 15.206 C 10 15.415 10.15 15.665 10.55 15.585 C 13.806 14.487 15.999 11.433 16 7.998 C 16 3.58 12.42 0 8 0 Z"
      style={{
        fill: "rgb(255, 255, 255)",
      }}
    />
    <path
      style={{
        fill: "rgb(124, 211, 92)",
      }}
      transform="matrix(0.920497, -0.39075, 0.39075, 0.920497, 1.304367, 7.955522)"
      d="M 6.695 5.409 H 13.743 V 7.659 A 2.952 2.25 0 0 1 10.791 9.909 H 3.743 V 7.659 A 2.952 2.25 0 0 1 6.695 5.409 Z"
      data-bx-shape="rect 3.743 5.409 10 4.5 2.952 0 2.952 0 1@cae4d38d"
    />
    <text
      transform="matrix(0.920505, -0.390732, 0.390732, 0.920505, -3.953467, 6.231951)"
      style={{
        fill: "rgb(255, 255, 255)",
        fontFamily: "K2D",
        fontSize: 4,
        fontWeight: 900,
        letterSpacing: "-0.5px",
        textAnchor: "middle",
        textTransform: "uppercase",
        whiteSpace: "pre",
      }}
      x={12.778}
      y={12.736}
    >
      {"TAG"}
    </text>
  </svg>
);

export default SVGComponent;