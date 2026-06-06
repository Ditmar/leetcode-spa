export const listContainerStyles = {
  width: '344.15px',
  minWidth: '344.15px',
  maxWidth: '344.15px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
  backgroundColor: '#ffffff',
  borderRight: '1.17px solid #E5E7EB',
  boxSizing: 'border-box' as const,
};

export const headerStyles = {
  height: '51.98px',
  minHeight: '51.98px',
  maxHeight: '51.98px',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '16.37px',
  paddingBottom: '16.37px',
  paddingLeft: '24.56px',
  paddingRight: '16.37px',
  borderBottom: '1.17px solid #E5E7EB',
  backgroundColor: '#ffffff',
  boxSizing: 'border-box' as const,
};

export const scrollableBoxStyles = {
  flexGrow: 1,
  overflowY: 'auto' as const,
  backgroundColor: '#ffffff',
  '&::-webkit-scrollbar': {
    width: '0px',
  },
};

export const itemButtonStyles = (isSelected: boolean): Record<string, unknown> => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '344.15px',

  height: '62.15px',
  minHeight: '62.15px',
  maxHeight: '62.15px',

  paddingTop: '12px',
  paddingBottom: '12px',
  paddingLeft: '12px',
  paddingRight: '12px',

  backgroundColor: isSelected ? '#EFF6FF' : '#ffffff',
  borderBottom: '1.17px solid #E5E7EB',
  position: 'relative' as const,
  cursor: 'pointer',
  boxSizing: 'border-box' as const,
  transition: 'background-color 0.1s ease',

  '&::before': {
    content: '""',
    position: 'absolute' as const,
    left: 0,
    top: 0,
    bottom: 0,
    width: '3.52px',
    backgroundColor: isSelected ? '#2B7FFF' : 'transparent',
  },

  '&:hover': {
    backgroundColor: isSelected ? '#EFF6FF' : '#f9fafb',
  },
});

export const itemIconStyles = {
  width: '15.98px',
  height: '15.98px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '8px',
  flexShrink: 0,
};

export const contentContainerStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  overflow: 'hidden',
  width: '278.15px',
};

export const titleTypographyStyles = {
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  color: '#262626',
  lineHeight: '20px',
  whiteSpace: 'nowrap' as const,
  overflow: 'hidden' as const,
  textOverflow: 'ellipsis' as const,
};

export const secondaryRowStyles = {
  display: 'flex',
  alignItems: 'center',
  height: '16px',
  gap: '6px',
  marginTop: '2px',
};

export const dotDividerStyles = {
  fontSize: '10px',
  color: '#bcc1c4',
  lineHeight: '16px',
  userSelect: 'none' as const,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '5px',
  transform: 'translateY(0.5px)',
};
