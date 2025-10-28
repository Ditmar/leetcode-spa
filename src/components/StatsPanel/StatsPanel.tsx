import React from 'react';

import { useStatsPanel } from './StatsPanel.hook';
import {
  CardContainer,
  StatItem,
  StatIcon,
  StatText,
  StatValue,
  IconWrapper,
} from './StatsPanel.styles';

import type { StatsPanelProps } from './StatsPanel.types';

export const StatsPanel = ({ totalTests, passed, failed, waiting }: StatsPanelProps) => {
  const stats = useStatsPanel({ totalTests, passed, failed, waiting });

  return (
    <CardContainer>
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <StatItem key={stat.id}>
            <IconWrapper color={stat.color}>
              <StatIcon color={stat.color}>
                {typeof Icon === 'string' ? (
                  <img
                    src={Icon}
                    alt={`${stat.label} icon`}
                    width={20}
                    height={20}
                    style={{ objectFit: 'contain' }}
                  />
                ) : (
                  <Icon aria-hidden="true" fontSize="small" />
                )}
              </StatIcon>
            </IconWrapper>

            <div>
              <StatValue aria-label={`stat-value-${stat.id}`}>{stat.value}</StatValue>
              <StatText>{stat.label}</StatText>
            </div>
          </StatItem>
        );
      })}
    </CardContainer>
  );
};
