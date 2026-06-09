import { theme } from '../../style-library';

import { AspectRatioRoot, AspectRatioContent } from './AspectRatio.styles';
import { parseRatio } from './AspectRatio.utils';

import type { AspectRatioProps } from './AspectRatio.types';

export const AspectRatio = ({ ratio = 1, children, sx }: AspectRatioProps) => {
  const computedRatio = parseRatio(ratio);

  return (
    <AspectRatioRoot
      sx={{
        aspectRatio: computedRatio,
        minHeight: theme.spacing(15),
        ...sx,
      }}
    >
      <AspectRatioContent>{children}</AspectRatioContent>
    </AspectRatioRoot>
  );
};
