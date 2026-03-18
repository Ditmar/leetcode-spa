import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import React, { useCallback, useEffect, useState } from 'react';

import { Root, StyledList, StyledItemButton, Title } from './SectionNav.styles';

import type { SectionNavProps } from './SectionNav.types';

const SectionNavComponent: React.FC<SectionNavProps> = ({
  sections = [],
  activeSectionId,
  onSelect,
  title,
  bottomSpacing,
  className,
  ...rest
}) => {
  const [internalActive, setInternalActive] = useState<string | null>(activeSectionId ?? null);

  useEffect(() => {
    if (activeSectionId !== undefined && activeSectionId !== null) {
      setInternalActive(activeSectionId);
    }
  }, [activeSectionId]);

  const doSelect = useCallback(
    (id: string) => {
      setInternalActive(id);
      if (onSelect) onSelect(id);
    },
    [onSelect]
  );

  const displayTitle = title;

  return (
    <Root
      {...rest}
      component="nav"
      bottomSpacing={bottomSpacing}
      className={className}
      aria-label={title || 'Navigation'}
    >
      {displayTitle ? <Title>{displayTitle}</Title> : null}
      <Box display="block">
        <StyledList aria-orientation="vertical">
          {sections.map((s) => {
            const selected = s.id === internalActive;
            return (
              <StyledItemButton
                key={s.id}
                selected={selected}
                onClick={() => doSelect(s.id)}
                aria-current={selected ? 'page' : undefined}
              >
                <ListItemText primary={s.label} />
              </StyledItemButton>
            );
          })}
        </StyledList>
      </Box>
    </Root>
  );
};

export const SectionNav = React.memo(SectionNavComponent);
SectionNav.displayName = 'SectionNav';
