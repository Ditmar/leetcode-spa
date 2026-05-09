import { Box, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)(() => ({
  width: '100%',
}));

export const Label = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
}));

export const CircularWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledLinear = styled(LinearProgress)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  height: theme.spacing(1),
  backgroundColor: theme.palette.grey[300],
}));

export const ContainerCard = styled(Box)(({ theme }) => ({
  width: '100%',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1.75),
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));

export const ProgressHeader = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}));
