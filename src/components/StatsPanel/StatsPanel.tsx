import React from 'react';
import type { StatsPanelProps } from './StatsPanel.types';
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

const ICONS_POSITIONS = {
  total: { top: 17, left: 16 },
  passed: { top: 90, left: 16 },
  failed: { top: 163, left: 16 },
  waiting: { top: 236, left: 16 },
} as const;


const ICON_SIZE = 48;
const H_GAP = 18;


const TEXTS_POS = Object.fromEntries(
  Object.entries(ICONS_POSITIONS).map(([k, pos]) => [
    k,
    { top: pos.top, left: pos.left + ICON_SIZE + H_GAP },
  ])
) as Record<keyof typeof ICONS_POSITIONS, { top: number; left: number }>;


export const StatsPanel = ({ totalTests, passed, failed, waiting }: StatsPanelProps) => {
  const stats = useStatsPanel({ totalTests, passed, failed, waiting });


  return (
    <CardContainer role="region" aria-label="stats-panel">
      {stats.map((stat) => {
        const iconPos = ICONS_POSITIONS[stat.id as keyof typeof ICONS_POSITIONS];
        const textPos = TEXTS_POS[stat.id as keyof typeof TEXTS_POS];
        const Icon = stat.icon;


        return (
          <React.Fragment key={stat.id}>
            <IconWrapper top={iconPos.top} left={iconPos.left}>
              <InnerIconBox>
                {typeof Icon === 'string' ? (
                  <IconImg src={Icon} />
                ) : (
                  <span style={{ display: 'inline-flex', width: '100%', height: '100%' }}>
                    {/* @ts-ignore */}
                    <Icon fontSize="small" />
                  </span>
                )}
              </InnerIconBox>
            </IconWrapper>


            <TextBlock top={textPos.top} left={textPos.left}>
              <ValueBox>{stat.value}</ValueBox>
              <LabelBox>{stat.label}</LabelBox>
            </TextBlock>
          </React.Fragment>
        );
      })}
    </CardContainer>
  );
};
