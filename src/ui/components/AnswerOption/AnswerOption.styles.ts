import { styled } from '@mui/material/styles';

export const Container = styled('div')({
  display: 'inline-block',
  border: '0.125rem dashed #B23DEB',
  borderRadius: '1.25rem',
  padding: '2rem 2.5rem',
  background: '#272436',
  boxSizing: 'border-box',
  minWidth: '20rem',
});

export const Label = styled('label', {
  shouldForwardProp: (prop) => !['selected', 'disabled', 'size'].includes(prop as string),
})<{ selected?: boolean; disabled?: boolean; size?: 'small' | 'medium' }>(({
  selected,
  disabled,
}) => {
  let colorValue;
  if (disabled) {
    colorValue = '#4F4F4F';
  } else if (selected) {
    colorValue = undefined;
  } else {
    colorValue = '#B23DEB';
  }
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    fontWeight: selected ? 700 : 500,
    fontSize: '2rem',
    fontFamily: "'Syne', sans-serif",
    color: colorValue,
  };
});

export const GradientText = styled('span')<{ selected?: boolean; disabled?: boolean }>(({
  selected,
  disabled,
}) => {
  if (disabled) {
    return { color: '#4F4F4F' };
  }
  if (selected) {
    return {
      background: 'linear-gradient(90deg, #B23DEB 0%, #DE8FFF 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    };
  }
  return { color: '#B23DEB' };
});

export const IconWrapper = styled('span')({
  marginRight: '0.1rem',
  display: 'flex',
  alignItems: 'center',
});

export const HiddenInput = styled('input')({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
});
