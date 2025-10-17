import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

import { Root, StyledList, StyledItemButton, Title } from './SectionNav.styles';

import type { SectionNavProps } from './SectionNav.types';

export const SectionNav: React.FC<SectionNavProps> = ({
  sections,
  activeSectionId,
  onSelect,
  title,
  titleSize,
  orientation,
  itemSize,
  maxCrossAxis,
  className,
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const effectiveOrientation: 'vertical' | 'horizontal' =
    orientation ?? (isSmall ? 'horizontal' : 'vertical');

  const [internalActive, setInternalActive] = React.useState<string | null>(
    activeSectionId ?? null
  );

  React.useEffect(() => {
    if (activeSectionId !== undefined && activeSectionId !== null) {
      setInternalActive(activeSectionId);
    }
  }, [activeSectionId]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const doSelect = (id: string) => {
    setInternalActive(id);
    if (onSelect) onSelect(id);
    handleClose();
  };

  const displayTitle = title ?? 'Section';
  return (
    <Root className={className} aria-label="sections-navigation">
      <Title titleSize={titleSize}>{displayTitle}</Title>
      {effectiveOrientation === 'horizontal' && isSmall ? (
        <>
          <IconButton
            aria-controls={open ? 'section-menu' : undefined}
            aria-haspopup="true"
            onClick={handleOpen}
            aria-label="Open sections"
          >
            ☰
          </IconButton>
          <Menu id="section-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
            {sections.map((s) => (
              <MenuItem
                key={s.id}
                selected={s.id === internalActive}
                onClick={() => doSelect(s.id)}
              >
                {s.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <Box display={effectiveOrientation === 'vertical' ? 'block' : 'flex'}>
          <StyledList
            orientation={effectiveOrientation}
            maxCrossAxis={maxCrossAxis}
            role="navigation"
            aria-orientation={effectiveOrientation}
          >
            {sections.map((s) => {
              const selected = s.id === internalActive;
              return (
                <StyledItemButton
                  key={s.id}
                  selected={selected}
                  onClick={() => doSelect(s.id)}
                  itemSize={itemSize}
                  orientation={effectiveOrientation}
                  role="button"
                  aria-current={selected ? 'true' : undefined}
                >
                  <ListItemText primary={s.label} />
                </StyledItemButton>
              );
            })}
          </StyledList>
        </Box>
      )}
    </Root>
  );
};

SectionNav.displayName = 'SectionNav';

export default SectionNav;
