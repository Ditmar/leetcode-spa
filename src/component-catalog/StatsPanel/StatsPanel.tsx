import React from 'react';

import { useStatsPanel } from './StatsPanel.hook';
import {
  CardContainer,
  IconWrapper,
  InnerIconBox,
  IconImg,
  TextBlock,
  ValueBox,
  LabelBox,
} from './StatsPanel.styles';

import type { StatsPanelProps } from './StatsPanel.types';

const ICON_SIZE = 48;
const H_GAP = 18;
const V_GAP = 73;

export const StatsPanel = ({ totalTests, passed, failed, waiting }: StatsPanelProps) => {
  const stats = useStatsPanel({ totalTests, passed, failed, waiting });

  return (
    <CardContainer role="region" aria-label="stats-panel">
      {stats.map((stat, index) => {
        const top = 17 + index * V_GAP;
        const iconPos = { top, left: 16 };
        const textPos = { top, left: iconPos.left + ICON_SIZE + H_GAP };
        const Icon = stat.icon;

        // Astro 5 SVG imports return a factory function with ImageMetadata attached.
        // Extract the URL from `.src` when present; otherwise treat as a React component.
        const iconSrc =
          typeof Icon === 'string'
            ? Icon
            : typeof Icon === 'function' && 'src' in Icon
              ? (Icon as unknown as { src: string }).src
              : undefined;

        return (
          <React.Fragment key={stat.id}>
            <IconWrapper top={iconPos.top} left={iconPos.left}>
              <InnerIconBox>
                {iconSrc ? (
                  <IconImg src={iconSrc} />
                ) : (
                  <span style={{ display: 'inline-flex', width: '100%', height: '100%' }}>
                    {/* @ts-expect-error TS ignores icon component type */}
                    <Icon fontSize="small" />
                  </span>
                )}
              </InnerIconBox>
            </IconWrapper>

            <TextBlock top={textPos.top} left={textPos.left}>
              <ValueBox aria-label={`stat-value-${stat.id}`}>{stat.value}</ValueBox>
              <LabelBox>{stat.label}</LabelBox>
            </TextBlock>
          </React.Fragment>
        );
      })}
    </CardContainer>
  );
};
