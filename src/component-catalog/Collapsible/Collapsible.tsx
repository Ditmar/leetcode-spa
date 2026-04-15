import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Typography, Collapse, Box } from '@mui/material';
import React, { useState, useId } from 'react';

import * as S from './Collapsible.styles';

import type { CollapsibleProps } from './Collapsible.types';

const Collapsible: React.FC<CollapsibleProps> = ({
  title = '@peduarte starred 3 repositories',
  headerSlot,
  children,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  ...props
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const id = useId();
  const regionId = `content-${id}`;
  const headerId = `header-${id}`;

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleToggle = () => {
    if (controlledOpen === undefined) setInternalOpen(!isOpen);
    onOpenChange?.(!isOpen);
  };

  return (
    <Box {...props}>
      <S.StyledCard>
        <S.Header id={headerId} onClick={handleToggle} sx={{ cursor: 'pointer' }}>
          {headerSlot || (
            <Typography variant="body2" fontWeight={600}>
              {title}
            </Typography>
          )}
          <S.BlackButton aria-expanded={isOpen} aria-controls={regionId} aria-labelledby={headerId}>
            {isOpen ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
          </S.BlackButton>
        </S.Header>

        <Collapse in={isOpen} id={regionId} role="region" aria-labelledby={headerId}>
          <Box sx={{ pt: 2 }}>{children}</Box>
        </Collapse>
      </S.StyledCard>
    </Box>
  );
};

export default Collapsible;
