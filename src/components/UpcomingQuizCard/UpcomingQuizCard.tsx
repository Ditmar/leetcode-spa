import { Typography, CardContent, Avatar } from '@mui/material';
import React from 'react';

import Calendar from './icon/Calendar.png';
import { useUpcomingQuizCard } from './UpcomingQuizCard.hook';
import {
  StyledCard,
  DateContainer,
  RegisterButton,
  StyleTitle,
  TypographyButton,
} from './UpcomingQuizCard.styles';

import type { UpcomingQuizCardProps } from './UpcomingQuizCard.types';

export const UpcomingQuizCard: React.FC<UpcomingQuizCardProps> = ({
  title,
  date,
  description,
  onRegister,
  ...cardProps
}) => {
  const { formattedDate } = useUpcomingQuizCard(date);

  return (
    <StyledCard {...cardProps} data-testid="quiz-card">
      <CardContent>
        <StyleTitle>{title}</StyleTitle>

        <DateContainer>
          <Avatar
            src={Calendar}
            alt="Calendar Icon"
            sx={{
              width: 130,
              height: 130,
              borderRadius: 0,
              margin: 0,
              padding: 0,
            }}
          />
          <Typography
            variant="subtitle1"
            color="text.secondary"
            data-testid="quiz-date"
            sx={(theme) => ({
              fontFamily: theme.typography.fontFamily,
              fontWeight: theme.typography.fontWeightBold,
              fontSize: theme.typography.pxToRem(20),
              lineHeight: '100%',
              letterSpacing: '0',
            })}
          >
            {formattedDate}
          </Typography>
        </DateContainer>

        {description && (
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {description}
          </Typography>
        )}

        <RegisterButton variant="contained" onClick={onRegister} data-testid="register-button">
          <TypographyButton>Register Now</TypographyButton>
        </RegisterButton>
      </CardContent>
    </StyledCard>
  );
};
