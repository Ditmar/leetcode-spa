import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

import Ellipse2 from '../../assets/Ellipse2.svg';
import Ellipse3 from '../../assets/Ellipse3.svg';
import LeetCodeLogo from '../../assets/LeetCode.svg';
import Avatar from '../../assets/person.svg';

import { LANDING_TEXTS } from './LandingPage.constants';
import {
  LandingRoot,
  HeroGrid,
  HeroLeft,
  HeroRight,
  AvatarImage,
  DecorativeSvgContainer,
} from './LandingPage.styles';

export const LandingPage = () => {
  const theme = useTheme();

  const spacing = theme.spacing;
  const breakpoints = theme.breakpoints;

  return (
    <LandingRoot role="region" aria-label="Landing page LeetCode inspired">
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: spacing(3, 6),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
          [breakpoints.down('md')]: {
            padding: spacing(2, 3),
          },
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Box
            component="img"
            src={LeetCodeLogo}
            alt={`${LANDING_TEXTS.brand} logo`}
            sx={{
              height: 25,
              width: 'auto',
              cursor: 'pointer',
            }}
          />
        </Box>
      </Box>

      <HeroGrid>
        <HeroLeft>
          <header style={{ marginTop: spacing(10) }}>
            <Typography
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: '32px', sm: '48px', md: '60px' },
                lineHeight: 1,
                textTransform: 'capitalize',
              }}
            >
              {LANDING_TEXTS.headlinePart1.split(' ').map((word, index) => {
                const gradient = index === 0 || index === 3;
                return (
                  <Box
                    key={index}
                    component="span"
                    sx={{
                      background: gradient
                        ? 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)'
                        : undefined,
                      WebkitBackgroundClip: gradient ? 'text' : undefined,
                      WebkitTextFillColor: gradient ? 'transparent' : undefined,
                      color: !gradient ? theme.palette.common.white : undefined,
                      mr: spacing(1),
                      display: 'inline-block',
                    }}
                  >
                    {word}
                  </Box>
                );
              })}

              <Box
                component="span"
                sx={{
                  display: 'block',
                  background: 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {LANDING_TEXTS.headlinePart2}
              </Box>
            </Typography>

            <Typography
              component="p"
              sx={{
                color: theme.palette.text.secondary,
                mb: spacing(4),
                fontFamily: theme.typography.fontFamily,
                fontWeight: 400,
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                maxWidth: 600,
              }}
            >
              {LANDING_TEXTS.description}
            </Typography>
          </header>
        </HeroLeft>

        <HeroRight
          sx={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <DecorativeSvgContainer
            sx={{
              position: 'absolute',
              top: '85%',
              left: '75%',
              width: spacing(16),
              height: spacing(16),
              opacity: 1,
              zIndex: 1,
            }}
          >
            <img
              src={Ellipse2}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                transform: 'rotate(0deg)',
              }}
            />
          </DecorativeSvgContainer>

          <DecorativeSvgContainer
            sx={{
              position: 'absolute',
              top: '30%',
              left: '14.5%',
              width: spacing(16),
              height: spacing(16),
              opacity: 1,
              zIndex: 1,
            }}
          >
            <img
              src={Ellipse3}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                transform: 'rotate(0deg)',
              }}
            />
          </DecorativeSvgContainer>

          <AvatarImage
            src={Avatar}
            alt="Persona leyendo"
            style={{
              width: '100%',
              height: '100%',
              opacity: 1,
              zIndex: 3,
            }}
          />
        </HeroRight>
      </HeroGrid>
    </LandingRoot>
  );
};
