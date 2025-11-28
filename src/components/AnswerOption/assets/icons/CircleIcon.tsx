import React from 'react';

import { DESIGN_TOKENS } from '../../AnswerOption.constants';

interface CircleIconProps {
  size: number;
  id: string;
  selected: boolean;
}

export const CircleIcon: React.FC<CircleIconProps> = ({ size, id, selected }) => {
  const gradientId = `answer-option-gradient-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="64"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={DESIGN_TOKENS.colors.gradientStart} />
          <stop offset="1" stopColor={DESIGN_TOKENS.colors.gradientEnd} />
        </linearGradient>
      </defs>

      <circle
        cx="32"
        cy="32"
        r="30"
        stroke={selected ? `url(#${gradientId})` : DESIGN_TOKENS.colors.borderDisabled}
        strokeWidth="2"
        fill={selected ? `url(#${gradientId})` : 'transparent'}
      />

      {selected && (
        <path
          d="M20 32 L28 40 L44 24"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};
