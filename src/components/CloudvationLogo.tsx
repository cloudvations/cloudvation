import React from 'react';

export const CloudvationLogo = ({
  height = 40,
  showText = true,
  className = '',
}) => {
  // Calculates relative widths and positioning based on the requested height
  const iconWidth = (height * 34) / 40;
  const viewBoxHeight = 40;
  const viewBoxWidth = showText ? 240 : 34;

  return (
    <div
      className={`cloudvation-logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${(height * 12) / 40}px`,
        userSelect: 'none',
        height: height,
      }}
    >
      {/* Scalable SVG Vector for the Shift Indicator Symbol */}
      <svg
        width={iconWidth}
        height={height}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        fill="none"
        xmlns="http://w3.org"
        style={{ height: '100%', width: 'auto', overflow: 'visible' }}
      >
        <defs>
          {/* Base Navy Color for Static Left Column */}
          <linearGradient
            id="basePillarGrad"
            x1="5"
            y1="12"
            x2="5"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#0B3C95" />
            <stop offset="100%" stopColor="#051B47" />
          </linearGradient>

          {/* Electric Cyan Accent Gradient for Shifting Right Column */}
          <linearGradient
            id="shiftPillarGrad"
            x1="22"
            y1="2"
            x2="22"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="50%" stopColor="#00A8F7" />
            <stop offset="100%" stopColor="#0266C8" />
          </linearGradient>

          {/* High-end modern UI glow shadow layer */}
          <filter
            id="neonGlow"
            x="10"
            y="-8"
            width="24"
            height="46"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Left Column: Anchor Pillar */}
        <rect
          x="0"
          y="12"
          width="10"
          height="26"
          rx="5"
          fill="url(#basePillarGrad)"
        />

        {/* Right Column: Upward Shifting Pillar */}
        <rect
          x="14"
          y="2"
          width="10"
          height="26"
          rx="5"
          fill="url(#shiftPillarGrad)"
          filter="url(#neonGlow)"
        />

        {/* Text Layer: Programmatic Layout Elements */}
        {showText && (
          <g transform="translate(38, 0)">
            <text
              y="28"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontWeight: 800,
                fontSize: '24px',
                fill: '#10095f',
                letterSpacing: '-0.6px',
              }}
            >
              Cloud
              <tspan
                style={{
                  fontWeight: 400,
                  fill: '#00A8F7',
                }}
              >
                vation
              </tspan>
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default CloudvationLogo;
