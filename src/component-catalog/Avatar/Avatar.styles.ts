import { styled } from '@mui/material/styles';
import { Avatar as MUIAvatar } from '@mui/material';
import { AvatarProps } from './Avatar.types';
import { AVATAR_SIZES, AVATAR_COLORS } from './Avatar.constants';

export const StyledAvatar = styled(MUIAvatar, {
  shouldForwardProp: (prop) => prop !== 'size' && prop !== 'customVariant',
})<AvatarProps>(({ size = 'md', customVariant = 'default' }) => ({
  width: AVATAR_SIZES[size].width,
  height: AVATAR_SIZES[size].height,
  fontSize: AVATAR_SIZES[size].fontSize,
  fontWeight: 500,
  backgroundColor: AVATAR_COLORS[customVariant].bg,
  color: AVATAR_COLORS[customVariant].text,
  border: 'none', // Following Figma clean look
}));

export const SectionContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  fontFamily: 'sans-serif',
  width: '100%',
  maxWidth: '1216px',
}));

export const Header = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  alignItems: 'flex-start',
});

export const Card = styled('div')({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '24px',
  width: '100%',
  height: '114px',
  background: '#FFFFFF',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '14px',
});

export const AvatarRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap', // Prevents overflow on mobile
});