import { Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

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
  HeaderContainer,
  LogoContainer,
  LogoImage,
} from './LandingPage.styles';
import '../../i18n';

export const LandingPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <LandingRoot role="region" aria-label={t(LANDING_TEXTS.brand)}>
      <HeaderContainer>
        <LogoContainer>
          <LogoImage
            src={LeetCodeLogo}
            alt={`${t(LANDING_TEXTS.brand)} logo`}
            sx={{
              [theme.breakpoints.down('sm')]: {
                width: '10rem',
              },
            }}
          />
        </LogoContainer>
      </HeaderContainer>

      <HeroGrid>
        <HeroLeft>
          <Box
            sx={{
              marginTop: theme.spacing(10),
              [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(10),
              },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontFamily: theme.typography.fontFamily,
                fontSize: {
                  xs: theme.typography.h4.fontSize,
                  sm: theme.typography.h3.fontSize,
                  md: theme.typography.h2.fontSize,
                },
                lineHeight: 1,
                textTransform: 'capitalize',
              }}
            >
              {t(LANDING_TEXTS.headlinePart1)
                .split(' ')
                .map((word: string, index: number) => {
                  const gradient = index === 0 || index === 3;
                  return (
                    <Box
                      key={index}
                      component="span"
                      sx={{
                        background: gradient
                          ? `linear-gradient(60deg, ${theme.palette.gradientStart.main} 13.4%, ${theme.palette.gradientEnd.main} 86.6%)`
                          : undefined,
                        WebkitBackgroundClip: gradient ? 'text' : undefined,
                        WebkitTextFillColor: gradient ? 'transparent' : undefined,
                        color: !gradient ? theme.palette.common.white : undefined,
                        mr: 1,
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
                  background: `linear-gradient(60deg, ${theme.palette.gradientStart.main} 13.4%, ${theme.palette.gradientEnd.main} 86.6%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t(LANDING_TEXTS.headlinePart2)}
              </Box>
            </Typography>

            <Typography
              component="p"
              sx={{
                color: theme.palette.text.secondary,
                mb: theme.spacing(4),
                fontFamily: theme.typography.fontFamily,
                fontWeight: 400,
                fontSize: {
                  xs: theme.typography.body2.fontSize,
                  sm: theme.typography.body1.fontSize,
                  md: theme.typography.h6.fontSize,
                },
              }}
            >
              {t(LANDING_TEXTS.description)}
            </Typography>
          </Box>
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
              width: theme.spacing(16),
              height: theme.spacing(16),
              opacity: 1,
              zIndex: 1,
              [theme.breakpoints.down('sm')]: {
                position: 'absolute',
                top: '84%',
                left: '75%',
                width: '79px',
                height: '79px',
              },
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
              aria-hidden="true"
              role="presentation"
              loading="lazy"
            />
          </DecorativeSvgContainer>

          <DecorativeSvgContainer
            sx={{
              position: 'absolute',
              top: '30%',
              left: '14.5%',
              width: theme.spacing(16),
              height: theme.spacing(16),
              opacity: 1,
              zIndex: 1,
              [theme.breakpoints.down('sm')]: {
                position: 'absolute',
                top: '30%',
                left: '10%',
                width: '79px',
                height: '79px',
              },
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
              aria-hidden="true"
              role="presentation"
              loading="lazy"
            />
          </DecorativeSvgContainer>

          <AvatarImage
            src={Avatar}
            alt="Persona leyendo"
            sx={{
              width: '100%',
              height: '100%',
              opacity: 1,
              zIndex: 3,

              [theme.breakpoints.down('sm')]: {
                bottom: '0%',
                position: 'absolute',
              },
            }}
          />
        </HeroRight>
      </HeroGrid>
    </LandingRoot>
  );
};
