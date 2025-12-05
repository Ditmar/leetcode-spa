import { Container, Stack, Paper, Typography, Divider, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSettingsContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: theme.breakpoints.values.lg,
  backgroundColor: theme.palette.background.paper,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
}));

export const SettingsLayout = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(4),
  width: '100%',
}));

export const SectionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: (theme.shape.borderRadius as number) * 2,
  boxShadow: theme.shadows[1],
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
}));

export const OptionGroup = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
}));

export const OptionRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  width: '100%',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const OptionDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.text.secondary,
}));

export const GroupDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));

export const PrivacyBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.action.hover,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));
