import { CONSOLE_DEFAULTS } from './ConsoleIO.constants';
import { useConsoleIO } from './ConsoleIO.hook';
import {
  ConsoleContainer,
  Frame,
  TopTabs,
  StyledTab,
  ConsoleContent,
  ScrollableTextField,
} from './ConsoleIO.styles';

import type { ConsoleIOProps } from './ConsoleIO.types';

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
    width: typeof width === 'number' ? `${width}px` : (width ?? '100%'),
    maxWidth: `${CONSOLE_DEFAULTS.WIDTH}px`,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <ConsoleContainer data-testid={dataTestId ?? 'consoleio-root'} style={outerStyle}>
      <Frame>
        <TopTabs
          value={activeTab}
          onChange={(_, v) => handleTabChange(v as 'sample' | 'custom')}
          variant="fullWidth"
        >
          <StyledTab
            label="Sample"
            value="sample"
            data-testid="tab-sample"
            sx={(theme) => ({
              bgcolor:
                activeTab === 'sample' ? theme.palette.grey[200] : theme.palette.common.white,
            })}
          />
          <StyledTab
            label="Custom"
            value="custom"
            data-testid="tab-custom"
            sx={(theme) => ({
              bgcolor:
                activeTab === 'custom' ? theme.palette.grey[200] : theme.palette.common.white,
            })}
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
                'data-testid': 'input-sample',
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
              inputProps={{
                'aria-label': 'custom-input',
                'data-testid': 'input-custom',
              }}
            />
          </ConsoleContent>
        )}
      </Frame>
    </ConsoleContainer>
  );
};
