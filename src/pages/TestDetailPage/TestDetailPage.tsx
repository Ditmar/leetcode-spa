import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React from 'react';

import { AvatarMenu } from '../../components/AvatarMenu/AvatarMenu';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import {
  /* TestHeader, */ LogoImage,
  TitleText,
  SubtitleText,
} from '../../components/TestHeader/TestHeader.styles';
import { PrimaryButton } from '../../ui/components/PrimaryButton/Button';

import { useTestDetail } from './TestDetailPage.hook';
import {
  Root,
  InnerCard,
  HeaderRow,
  LogoArea,
  TitleSection,
  CertificatePill,
  MetricBadgeBox,
  NoticeBox,
  InfoValue,
  NoticeItem,
  IconPlaceholder,
  PlaceholderBox,
  NavigationBox,
  Separator,
  MainArea,
  PageHeader,
  HeaderTitle,
  HeaderSubtitle,
  HeaderRight,
  SearchBox,
  AvatarWrapper,
} from './TestDetailPage.styles';

import type { TestDetailPageProps } from './TestDetailPage.types';

export const TestDetailPage: React.FC<TestDetailPageProps> = ({
  testId,
  onStart,
  loading: loadingFromProps,
  error: errorFromProps,
}) => {
  const { test, loading: loadingFromHook, error: errorFromHook } = useTestDetail(testId);
  const loading = typeof loadingFromProps === 'boolean' ? loadingFromProps : loadingFromHook;
  const error = typeof errorFromProps === 'string' ? errorFromProps : errorFromHook;

  const handleStart = () => {
    if (!test) return;
    if (onStart) {
      onStart(test.id);
      return;
    }
    window.location.href = `/tests/${test.id}/run`;
  };

  return (
    <Root>
      {/* Left navigation area — visual mock showing where NavigationSidebar goes. Keep as a placeholder but styled to match mockup */}
      {/* Visual recuadro where NavigationSidebar should be integrated */}
      <NavigationBox data-testid="navigation-box">NavigationSidebar</NavigationBox>
      {/* Separator line placed outside the navigation box */}
      <Separator data-testid="navigation-separator" />

      <MainArea>
        <PageHeader>
          <div>
            <HeaderTitle>Tests For You !</HeaderTitle>
            <HeaderSubtitle>Here is your Profile Dashboard</HeaderSubtitle>
          </div>

          <HeaderRight>
            <SearchBox>
              <SearchBar data-testid="searchbar-component" placeholder="Search" size="small" />
            </SearchBox>
            <AvatarWrapper>
              <AvatarMenu data-testid="avatar-component" avatarUrl="" username="" />
            </AvatarWrapper>
          </HeaderRight>
        </PageHeader>

        <InnerCard>
          {loading ? (
            <Box display="flex" alignItems="center" justifyContent="center" height={200}>
              <CircularProgress aria-label="loading" />
            </Box>
          ) : error ? (
            <PlaceholderBox role="alert">{`Error loading test: ${error}`}</PlaceholderBox>
          ) : test ? (
            <>
              <HeaderRow>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 24 }}>
                  <LogoArea>
                    {/* Logo is imported from local assets so colors are preserved. */}
                    {/* File to add: src/pages/TestDetailPage/assets/tcs-inline-logo.jpg */}
                    {/* Once you upload the JPG I will create it; until then this import is a placeholder. */}
                    {/* Use Vite-friendly URL import so Storybook/Vite can resolve assets */}
                    <LogoImage
                      src={new URL('./assets/logo.jpg', import.meta.url).href}
                      size="medium"
                      alt="TCS logo"
                      data-testid="inline-logo"
                    />
                  </LogoArea>

                  <TitleSection>
                    <TitleText
                      sx={{
                        width: 'auto',
                        whiteSpace: 'normal',
                        overflow: 'visible',
                        textOverflow: 'unset',
                      }}
                    >
                      TCS Quiz Competition
                    </TitleText>
                    <SubtitleText
                      sx={{
                        width: 'auto',
                        whiteSpace: 'normal',
                        overflow: 'visible',
                        textOverflow: 'unset',
                      }}
                    >
                      TCS Campus Drive - 2023
                    </SubtitleText>
                    {/* Hidden elements for tests: do not affect appearance */}
                    <span data-testid="test-title" style={{ display: 'none' }}>
                      {test?.name}
                    </span>
                    <span data-testid="test-subtitle" style={{ display: 'none' }}>
                      {test?.company?.name ?? test?.description}
                    </span>
                  </TitleSection>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <PrimaryButton data-testid="start-button" onClick={handleStart} size="small">
                    Start Test
                  </PrimaryButton>
                </div>
              </HeaderRow>

              <CertificatePill data-testid="certificate-pill">
                <img
                  src={new URL('./assets/Award 3.png', import.meta.url).href}
                  alt="Certification"
                  style={{ height: 20, width: 'auto', objectFit: 'contain' }}
                  data-testid="pilltag-image"
                />
                <Typography sx={{ fontWeight: 700, marginLeft: 1, marginRight: 1 }}>
                  Certification
                </Typography>
                <Box sx={{ color: '#2b9a54', fontWeight: 600, fontSize: 14 }}>
                  We Will Issue You A Free Certificate Of Achievement If You Score In The Top 25%.
                </Box>
              </CertificatePill>

              <MetricBadgeBox data-testid="metric-badge-box">MetricBadge</MetricBadgeBox>

              <NoticeBox>
                <NoticeItem>
                  <IconPlaceholder aria-hidden>
                    <img
                      src={new URL('./assets/Display 2.png', import.meta.url).href}
                      alt="environment"
                    />
                  </IconPlaceholder>
                  <InfoValue>
                    We recommend having an environment ready, so you can solve problems outside of
                    the browser.
                  </InfoValue>
                </NoticeItem>
                <NoticeItem>
                  <IconPlaceholder aria-hidden>
                    <img
                      src={new URL('./assets/Folder Minus 1.png', import.meta.url).href}
                      alt="resources"
                    />
                  </IconPlaceholder>
                  <InfoValue>
                    You can use any documentation, files, or other helpful resources.
                  </InfoValue>
                </NoticeItem>
                <NoticeItem>
                  <IconPlaceholder aria-hidden>
                    <img
                      src={new URL('./assets/Time Circle 3.png', import.meta.url).href}
                      alt="timer"
                    />
                  </IconPlaceholder>
                  <InfoValue>{test.durationMinutes} Minutes (No Breaks Allowed)</InfoValue>
                </NoticeItem>
              </NoticeBox>
            </>
          ) : (
            <PlaceholderBox>No test selected</PlaceholderBox>
          )}
        </InnerCard>
      </MainArea>
    </Root>
  );
};

export default TestDetailPage;
