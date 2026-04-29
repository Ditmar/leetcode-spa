import { Box, styled } from '@mui/material';

export const CarouselContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
});

export const SlidesContainer = styled(Box)<{ index: number }>(({ theme, index }) => ({
  display: 'flex',
  width: '100%',
  transform: `translateX(-${index * 100}%)`,
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.short,
  }),
}));

export const Slide = styled(Box)({
  minWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
