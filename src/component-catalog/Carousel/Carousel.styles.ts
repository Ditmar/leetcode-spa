import { Box, styled } from '@mui/material';

export const CarouselContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
});

export const SlidesContainer = styled(Box)<{ index: number }>(({ index }) => ({
  display: 'flex',
  width: '100%',
  transform: `translateX(-${index * 100}%)`,
  transition: 'transform 0.4s ease-in-out',
}));

export const Slide = styled(Box)({
  minWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
