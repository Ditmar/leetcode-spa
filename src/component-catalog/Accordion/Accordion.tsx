import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

import { useAccordionState } from './Accordion.hook';
import {
  AccordionContainer,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  TouchTarget,
} from './Accordion.styles';

import type { AccordionProps } from './Accordion.types';

export const Accordion = (props: AccordionProps) => {
  const { itemsWithState } = useAccordionState(props);
  const { disableAnimation, square, slotProps } = props;

  return (
    <AccordionContainer square={square} data-testid="accordion-container">
      {itemsWithState.map((item) => (
        <StyledAccordion
          key={item.id}
          expanded={item.expanded}
          onChange={item.onChange}
          disabled={item.disabled}
          disableGutters
          square={square}
          TransitionProps={{ timeout: disableAnimation ? 0 : undefined }}
          {...slotProps?.accordion}
          data-testid={`accordion-${item.id}`}
        >
          <StyledAccordionSummary
            expandIcon={
              <TouchTarget>{item.expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}</TouchTarget>
            }
            {...slotProps?.summary}
            data-testid={`accordion-summary-${item.id}`}
          >
            {item.summary}
          </StyledAccordionSummary>
          <StyledAccordionDetails
            {...slotProps?.details}
            data-testid={`accordion-details-${item.id}`}
          >
            {item.details}
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </AccordionContainer>
  );
};
