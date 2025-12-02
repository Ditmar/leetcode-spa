import React from 'react';

interface CheckIconProps {
  width: number;
  height: number;
  color?: string;
}

export const CheckIcon: React.FC<CheckIconProps> = ({ width, height, color = 'white' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5734 7.14624C3.32699 7.14624 3.08059 7.05274 2.89249 6.86464L0.282154 4.25431C-0.0940512 3.8781 -0.0940512 3.26869 0.282154 2.89359C0.658358 2.51738 1.26667 2.51628 1.64287 2.89249L3.5734 4.82301L8.11425 0.282154C8.49046 -0.0940512 9.09877 -0.0940512 9.47498 0.282154C9.85118 0.658358 9.85118 1.26781 9.47498 1.64287L4.25997 6.85788C4.07187 7.04598 3.82546 7.14624 3.5734 7.14624Z"
      fill={color}
    />
  </svg>
);
