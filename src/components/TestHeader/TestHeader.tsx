/// <reference path="./types/custom.d.ts" />
import './fonts.local.css';
import React from 'react';
import { Box, Skeleton, useMediaQuery, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { PropsTestHeaderProps } from './TestHeader.types';
import {
  HeaderContainer,
  LogoSection,
  TextSection,
  TitleText,
  SubtitleText,
  LogoImage,
} from './TestHeader.styles';
import { DEFAULT_TITLE, DEFAULT_SUBTITLE } from './TestHeader.constants';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import tcsLogo from './assets/tcs-logo.svg';

// ✅ Export nombrado tipado explícitamente
export const TestHeader: React.FC<PropsTestHeaderProps> = (props) => {
  const {
    title = DEFAULT_TITLE,
    subtitle = DEFAULT_SUBTITLE,
    variant = 'horizontal',
    size = 'medium',
    isLoading = false,
  } = props;

  const hasLogoProp = Object.prototype.hasOwnProperty.call(props, 'logoSrc');
  const logoSrcToUse: string | undefined = hasLogoProp ? (props.logoSrc as any) : tcsLogo;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const direction = isMobile || variant === 'vertical' ? 'column' : 'row';

  if (isLoading) {
    return (
      <div role="banner" data-testid="header-wrapper" style={{ display: 'flex', flexDirection: direction }}>
        <Card sx={{ boxShadow: 'none', bgcolor: 'transparent', width: '100%' }}>
          <HeaderContainer flexDirection={direction}>
            <LogoSection>
              <Skeleton
                variant="rectangular"
                width={size === 'small' ? 100 : size === 'large' ? 240 : 201}
                height={size === 'small' ? 42 : size === 'large' ? 102 : 85}
                role="progressbar"
              />
              <TextSection>
                <Skeleton variant="text" width={203} height={22} role="progressbar" />
                <Skeleton variant="text" width={169} height={19} role="progressbar" />
              </TextSection>
            </LogoSection>

            <Box
              sx={{
                width: theme.spacing(10),
                display: 'flex',
                alignItems: 'center',
              }}
            />
          </HeaderContainer>
        </Card>
      </div>
    );
  }

  return (
    <div role="banner" data-testid="header-wrapper" style={{ display: 'flex', flexDirection: direction }}>
      <Card sx={{ boxShadow: 'none', bgcolor: 'transparent', width: '100%' }}>
        <HeaderContainer flexDirection={direction}>
          <LogoSection>
            {logoSrcToUse ? (
              <LogoImage src={logoSrcToUse} alt="TCS Logo" size={size} />
            ) : (
              <Box
                data-testid="placeholder-logo"
                sx={{
                  width: size === 'small' ? 100 : size === 'large' ? 240 : 201,
                  height: size === 'small' ? 42 : size === 'large' ? 102 : 85,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'grey.100',
                  borderRadius: 1,
                }}
              >
                <InsertPhotoIcon
                  fontSize={size === 'large' ? 'large' : 'medium'}
                  color="disabled"
                  aria-label="Placeholder logo"
                />
              </Box>
            )}

            <TextSection>
              <TitleText>{title}</TitleText>
              {subtitle && <SubtitleText>{subtitle}</SubtitleText>}
            </TextSection>
          </LogoSection>

          <Box
            sx={{
              width: theme.spacing(10),
              display: 'flex',
              alignItems: 'center',
            }}
          />
        </HeaderContainer>
      </Card>
    </div>
  );
};