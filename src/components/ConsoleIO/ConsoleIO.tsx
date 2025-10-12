import React from 'react';
import { ConsoleContainer, Frame, TopTabs, StyledTab, ConsoleContent, ScrollableTextField } from './ConsoleIO.styles';
import { useConsoleIO } from './ConsoleIO.hook';
import type { ConsoleIOProps } from './ConsoleIO.types';
import { CONSOLE_DEFAULTS } from './ConsoleIO.constants';

export const ConsoleIO: React.FC<ConsoleIOProps> = ({
    sampleValue = '',
    customValue = '',
    onSampleChange,
    onCustomChange,
    defaultTab = 'sample',
    height = CONSOLE_DEFAULTS.HEIGHT,
    width,
    'data-testid': dataTestId,
}) => {
    const {
        activeTab,
        sampleInput,
        customInput,
        handleTabChange,
        handleSampleChange,
        handleCustomChange,
    } = useConsoleIO({
        sampleValue,
        customValue,
        defaultTab,
        onSampleChange,
        onCustomChange,
    });

    const outerStyle: React.CSSProperties = {
        width: typeof width === 'number' ? `${width}px` : width ?? '100%',
        maxWidth: `${CONSOLE_DEFAULTS.WIDTH}px`,
        height: typeof height === 'number' ? `${height}px` : height,
    };

    return (
        <ConsoleContainer data-testid={dataTestId ?? 'consoleio-root'} style={outerStyle}>
            <Frame>
                <TopTabs value={activeTab} onChange={(_, v) => handleTabChange(v as any)} variant="fullWidth">
                    <StyledTab
                        label="Sample"
                        value="sample"
                        sx={{
                            bgcolor: activeTab === 'sample' ? CONSOLE_DEFAULTS.COLORS.sampleTabBg : CONSOLE_DEFAULTS.COLORS.background,
                        }}
                    />
                    <StyledTab
                        label="Custom"
                        value="custom"
                        sx={{
                            bgcolor: activeTab === 'custom' ? CONSOLE_DEFAULTS.COLORS.sampleTabBg : CONSOLE_DEFAULTS.COLORS.background,
                        }}
                    />
                </TopTabs>

                {activeTab === 'sample' ? (
                    <ConsoleContent role="region" aria-label="sample-area">
                        <ScrollableTextField
                            multiline
                            minRows={8}
                            value={sampleInput}
                            onChange={(e) => handleSampleChange(e.target.value)}
                            placeholder={CONSOLE_DEFAULTS.PLACEHOLDER_SAMPLE}
                            variant="outlined"
                            inputProps={{
                                'aria-label': 'sample-input',
                                style: { fontWeight: 300 },
                            }}
                        />
                    </ConsoleContent>
                ) : (
                    <ConsoleContent role="region" aria-label="custom-area">
                        <ScrollableTextField
                            multiline
                            minRows={8}
                            value={customInput}
                            onChange={(e) => handleCustomChange(e.target.value)}
                            placeholder={CONSOLE_DEFAULTS.PLACEHOLDER_SAMPLE}
                            variant="outlined"
                            inputProps={{ 'aria-label': 'custom-input' }}
                        />
                    </ConsoleContent>
                )}
            </Frame>
        </ConsoleContainer>
    );
};

export default ConsoleIO;
