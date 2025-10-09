import { Typography, CardContent } from '@mui/material';
import React from 'react';

import CalendarIcon from './icon/CalendarIcon';
import { useUpcomingQuizCard } from './UpcomingQuizCard.hook';
import { StyledCard, DateContainer, RegisterButton } from './UpcomingQuizCard.styles';

import type { UpcomingQuizCardProps } from './UpcomingQuizCard.types';

const UpcomingQuizCard: React.FC<UpcomingQuizCardProps> = ({
  title,
  date,
  description,
  onRegister,
  ...cardProps
}) => {
  const { formattedDate } = useUpcomingQuizCard(date);

  const getLocalDay = (dateValue: string | Date) => {
    if (typeof dateValue === 'string') {
      // Usar UTC para consistencia con el hook
      const [year, month, day] = dateValue.split('-').map(Number);
      return new Date(Date.UTC(year, month - 1, day)).getUTCDate();
    }
    return dateValue.getUTCDate();
  };

  const day = getLocalDay(date);

  return (
    <StyledCard {...cardProps} data-testid="quiz-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        <DateContainer>
          <CalendarIcon fontSize="large" color="#1976d2" day={day} />

          <Typography variant="subtitle1" color="textSecondary" data-testid="quiz-date">
            {formattedDate}
          </Typography>
        </DateContainer>

        {description && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {description}
          </Typography>
        )}

        <RegisterButton variant="contained" onClick={onRegister} data-testid="register-button">
          Register Now
        </RegisterButton>
      </CardContent>
    </StyledCard>
  );
};

export default UpcomingQuizCard;
