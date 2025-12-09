import { Typography, Avatar } from '@mui/material';
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
      <StyleTitle
        sx={(theme) => ({
          color: theme.palette.grey[900] + 'CC',
        })}
      >
        {title}
      </StyleTitle>
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
          data-testid="quiz-date"
          sx={(theme) => ({
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.pxToRem(18),
            lineHeight: theme.spacing(3),
            letterSpacing: theme.spacing(0),
            color: theme.palette.grey[900] + '80',
            textAlign: 'center',

            width: theme.spacing(17.5),
            height: theme.spacing(3),

            [theme.breakpoints.down('sm')]: {
              fontSize: theme.typography.pxToRem(16),
              marginTop: theme.spacing(1),
              lineHeight: theme.spacing(2.5),
            },
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
    </StyledCard>
  );
};
