import '../src/assets/fonts/syne.css';
import '../src/style-library/theme/colors.css';

import { FC } from 'react';

import ThemeProvider from '../src/style-library/provider/MuiThemeProvider';

const previewDecorator = (Story: FC) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [previewDecorator];
