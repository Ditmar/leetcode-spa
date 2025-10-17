import React from "react";
import type { DonutProgressProps } from "./DonutProgress.types";
import { DEFAULT_SIZE, DEFAULT_STROKE_WIDTH } from "./DonutProgress.constants";
import { DonutContainer, DonutText } from "./DonutProgress.styles";
import { useDonutColor } from "./DonutProgress.hooks";

export const DonutProgress: React.FC<DonutProgressProps> = ({
  percentage,
  color = "auto",
  size = DEFAULT_SIZE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  animated = true,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const computedColor = useDonutColor(color, percentage);

  return (
   <DonutContainer size={size}>
      <svg width={size} height={size}>
        <circle
          stroke="#6b6868ff"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke={computedColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeLinecap="round"
          style={{
            transition: animated
              ? "stroke-dashoffset 0.8s ease, stroke 0.8s ease"
              : "none",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>
      <DonutText>{Math.round(percentage)}%</DonutText>
    </DonutContainer>
  );
};
