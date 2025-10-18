import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';

import { DEFAULT_TITLE, DEFAULT_MESSAGE, DEFAULT_ILLUSTRATION } from './ThankYouMessage.constants';
import { Container, Title, Message, Illustration, Notification } from './ThankYouMessage.styles';

import type { IProps } from './ThankYouMessage.types';

const ThankYouMessage: React.FC<IProps> = ({
  title = DEFAULT_TITLE,
  message = DEFAULT_MESSAGE,
  illustration = DEFAULT_ILLUSTRATION,
  showNotification = true,
  notificationText,
  className,
  'data-testid': dataTestId,
}) => {
  const notif = notificationText ?? 'You will be notified when your test results are released';

  return (
    <Container className={className} data-testid={dataTestId ?? 'thank-you-container'}>
      <Paper
        elevation={3}
        sx={{ padding: (t) => t.spacing(4), width: '100%', boxSizing: 'border-box' }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Title data-testid="thank-you-title">{title}</Title>
          <Message data-testid="thank-you-message">{message}</Message>

          {illustration && typeof illustration === 'string' ? (
            <Illustration
              src={illustration}
              alt="Thank You Illustration"
              data-testid="thank-you-illustration"
            />
          ) : (
            illustration || null
          )}

          {showNotification ? (
            <Notification data-testid="thank-you-notification">{notif}</Notification>
          ) : null}
        </Box>
      </Paper>
    </Container>
  );
};

export default ThankYouMessage;
