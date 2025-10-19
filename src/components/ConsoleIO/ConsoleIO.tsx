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
import type { FC } from 'react';

export const ConsoleIO: FC<ConsoleIOProps> = ({
  sampleValue = '',
  customValue = '',
  onSampleChange,
  onCustomChange,
  defaultTab = 'sample',
  height,
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

  return (
    <ConsoleContainer
      data-testid={dataTestId ?? 'consoleio-root'}
      sx={{
        width: typeof width === 'number' ? `${width}px` : (width ?? '100%'),
        maxWidth: `${CONSOLE_DEFAULTS.CONTAINER_WIDTH_PX}px`,
        height:
          typeof height === 'number' ? `${height}px` : `${CONSOLE_DEFAULTS.CONTAINER_HEIGHT_PX}px`,
      }}
    >
      <Frame>
        <TopTabs
          value={activeTab}
          onChange={(_, v) => handleTabChange(v as 'sample' | 'custom')}
          variant="fullWidth"
        >
          <StyledTab label="Sample" value="sample" data-testid="tab-sample" />
          <StyledTab label="Custom" value="custom" data-testid="tab-custom" />
        </TopTabs>

        <ConsoleContent role="region" aria-label={`${activeTab}-area`}>
          <ScrollableTextField
            multiline
            minRows={8}
            value={activeTab === 'sample' ? sampleInput : customInput}
            onChange={(e) =>
              activeTab === 'sample'
                ? handleSampleChange(e.target.value)
                : handleCustomChange(e.target.value)
            }
            placeholder={CONSOLE_DEFAULTS.PLACEHOLDER_SAMPLE}
            variant="outlined"
            inputProps={{
              'aria-label': `${activeTab}-input`,
              'data-testid': `input-${activeTab}`,
            }}
          />
        </ConsoleContent>
      </Frame>
    </ConsoleContainer>
  );
};
