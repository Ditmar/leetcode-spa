import React from 'react';

export const AlarmClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke='#ae8cfa'
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="13" r="10.25" />
    <path d="M12 9v4l2 2" />
    <g transform="translate(0, 0)">
      <path d="M6 1.5L3 3.5" />
      <path d="M18 1.5L21 3.5" />
    </g>
  </svg>
);