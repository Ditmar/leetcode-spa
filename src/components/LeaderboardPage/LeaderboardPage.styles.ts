import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageWrap = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const ContentCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
}));

export const HighlightRow = styled(Box)(({ theme }) => ({
  background: theme.palette.action.hover,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
}));
