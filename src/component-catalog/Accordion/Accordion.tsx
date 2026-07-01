import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  const { disableAnimation, square, slotProps, expandIcon } = props;

  const getValidSlotProps = () => {
    const accordionProps = { ...slotProps?.accordion };
    const summaryProps = { ...slotProps?.summary };
    const detailsProps = { ...slotProps?.details };

    delete accordionProps.expanded;
    delete accordionProps.onChange;
    delete accordionProps.disabled;
    delete summaryProps.expandIcon;

    return { accordionProps, summaryProps, detailsProps };
  };

  const validSlotProps = getValidSlotProps();

  return (
    <AccordionContainer square={square} data-testid="accordion-container">
      {itemsWithState.map((item) => {
        const summaryIcon = expandIcon || (item.expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />);

        return (
          <StyledAccordion
            key={item.id}
            disableGutters
            square={square}
            TransitionProps={{ timeout: disableAnimation ? 0 : undefined }}
            {...validSlotProps.accordionProps}
            expanded={item.expanded}
            onChange={item.onChange}
            disabled={item.disabled}
            data-testid={`accordion-${item.id}`}
          >
            <StyledAccordionSummary
              {...validSlotProps.summaryProps}
              expandIcon={<TouchTarget>{summaryIcon}</TouchTarget>}
              data-testid={`accordion-summary-${item.id}`}
            >
              {item.summary}
            </StyledAccordionSummary>
            <StyledAccordionDetails
              {...validSlotProps.detailsProps}
              data-testid={`accordion-details-${item.id}`}
            >
              {item.details}
            </StyledAccordionDetails>
          </StyledAccordion>
        );
      })}
    </AccordionContainer>
  );
};
