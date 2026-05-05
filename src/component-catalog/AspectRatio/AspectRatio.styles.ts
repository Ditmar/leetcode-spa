import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const AspectRatioRoot = styled(Box)(() => ({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
}));

export const AspectRatioContent = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
}));
