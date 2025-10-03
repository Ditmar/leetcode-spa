import ThemeProvider from '../src/style-library/provider/MuiThemeProvider';
import { FC } from 'react';

interface PreviewDecoratorProps {
  Story: FC;
  context: any;
}

const previewDecorator = (Story: FC, context: any) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [previewDecorator];
