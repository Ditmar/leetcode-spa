import { Container, Stack, Paper, Typography, Divider, Box, type PaperProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSettingsContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== 'forceMobile',
})<{ forceMobile?: boolean }>(({ theme, forceMobile }) => ({
  padding: theme.spacing(4),
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto',
  width: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,

  ...(forceMobile && {
    maxWidth: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
  }),
}));

export const SettingsLayout = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(4),
  width: '100%',
}));

export const SectionCard = styled(Paper)<PaperProps>(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create(['box-shadow', 'border-color']),

  '&:hover': {
    boxShadow: theme.shadows[6],
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const OptionGroup = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(3),
}));

export const OptionRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: theme.spacing(1.5),
  },
}));

export const OptionDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(0.5),
}));

export const GroupDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

export const PrivacyBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
  border: `1px dashed ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
}));
