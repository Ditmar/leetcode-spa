import React from "react";
import { CardContainer, StatItem, StatIcon, StatText, StatValue, IconWrapper } from "./StatsPanel.styles";
import type { StatsPanelProps } from "./StatsPanel.types";
import { useStatsPanel } from "./StatsPanel.hook";

export const StatsPanel: React.FC<StatsPanelProps> = ({ totalTests, passed, failed, waiting }) => {
    const stats = useStatsPanel({ totalTests, passed, failed, waiting });

    return (
        <CardContainer>
            {stats.map((stat) => (
                <StatItem key={stat.id}>
                    <IconWrapper>
                        <StatIcon color={stat.color}>{React.createElement(stat.icon)}</StatIcon>
                    </IconWrapper>
                    <div>
                        <StatValue>{stat.value}</StatValue>
                        <StatText>{stat.label}</StatText>
                    </div>
                </StatItem>
            ))}
        </CardContainer>
    );
};
