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
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const id = useId();
  const regionId = `content-${id}`;

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleToggle = () => {
    if (controlledOpen === undefined) setInternalOpen(!isOpen);
    onOpenChange?.(!isOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>
        <Typography variant="h5" fontWeight={600}>
          Collapsible
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Expandable content
        </Typography>
      </Box>

      <S.StyledCard>
        <S.Header>
          {headerSlot || (
            <Typography variant="body2" fontWeight={600}>
              {title}
            </Typography>
          )}
          <S.BlackButton onClick={handleToggle} aria-expanded={isOpen} aria-controls={regionId}>
            {isOpen ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
          </S.BlackButton>
        </S.Header>

        <Collapse in={isOpen} id={regionId}>
          <Box sx={{ pt: 2 }}>{children}</Box>
        </Collapse>
      </S.StyledCard>
    </Box>
  );
};

export default Collapsible;
