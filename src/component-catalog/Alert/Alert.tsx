import { ALERT_ICONS } from './Alert.constants';
import {
  StyledAlertContainer,
  StyledIconWrapper,
  StyledContentWrapper,
  StyledTitle,
  StyledDescription,
} from './Alert.styles';

import type { AlertProps } from './Alert.types';

const Alert = ({ severity = 'info', title, children, icon, className }: AlertProps) => {
  const IconComponent = ALERT_ICONS[severity];

  return (
    <StyledAlertContainer
      severity={severity}
      className={className}
      role="alert"
      data-testid={`alert-${severity}`}
    >
      <StyledIconWrapper severity={severity} aria-hidden="true">
        {icon ? icon : <IconComponent data-testid="alert-default-icon" />}
      </StyledIconWrapper>
      <StyledContentWrapper>
        <StyledTitle severity={severity} component="h6">
          {title}
        </StyledTitle>
        {children && (
          <StyledDescription severity={severity} component="p">
            {children}
          </StyledDescription>
        )}
      </StyledContentWrapper>
    </StyledAlertContainer>
  );
};

export { Alert };
