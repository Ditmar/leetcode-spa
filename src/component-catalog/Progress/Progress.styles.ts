import { Box, Button, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const Label = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  textAlign: 'right',
}));

export const CircularWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

export const StyledLinear = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'customcolor',
})<{ customcolor?: string }>(({ customcolor }) => ({
  width: '100%',
  ...(customcolor && {
    '& .MuiLinearProgress-bar': {
      backgroundColor: customcolor,
    },
  }),
}));

export const ContainerCard = styled(Box)(({ theme }) => ({
  width: '100%',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1.75),
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));

export const ControlsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

export const StyledButton = styled(Button)<{ bgcolor: string }>(({ theme, bgcolor }) => ({
  minWidth: theme.spacing(10),
  height: theme.spacing(4),
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  textTransform: 'none',
  backgroundColor: bgcolor,
  color: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: bgcolor,
    opacity: 0.9,
  },
}));

export const Header = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}));
