import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  ThemeProvider,
  createTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useMemo } from 'react';

import {
  LANGUAGE_OPTIONS,
  SETTINGS_LABELS,
  ACCESSIBILITY_IDS,
  SETTINGS_TEST_IDS,
} from './SettingsPage.constants';
import { useSettingsPage } from './SettingsPage.hook';
import {
  StyledSettingsContainer,
  SettingsLayout,
  SectionCard,
  SectionTitle,
  OptionGroup,
  OptionRow,
  OptionDescription,
  PrivacyBox,
} from './SettingsPage.styles';

import type { SettingsPageProps } from './SettingsPage.types';

export const SettingsPage: React.FC<SettingsPageProps> = React.memo(({ forceMobile }) => {
  const { preferences, isLoading, toggleTheme, setNotifications, setLanguage, setPrivacySetting } =
    useSettingsPage({ forceMobile });
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: preferences.theme,
        },
      }),
    [preferences.theme]
  );

  const t = SETTINGS_LABELS[preferences.language];
  const isMobileView = forceMobile ?? false;

  const PrivacySwitches = () => (
    <>
      {(Object.keys(preferences.privacy) as Array<keyof typeof preferences.privacy>).map((key) => (
        <OptionRow key={key}>
          <div>
            <Typography variant="body1" fontWeight="medium">
              {
                t[
                  key === 'publicProfile'
                    ? 'privacyPublicProfile'
                    : key === 'shareActivity'
                      ? 'privacyShareActivity'
                      : 'privacySaveHistory'
                ]
              }
            </Typography>
            <OptionDescription>
              {key === 'publicProfile' && 'Tu perfil será visible para otros usuarios'}
              {key === 'shareActivity' && 'Tu actividad aparecerá en el feed público'}
              {key === 'saveHistory' && 'Guardamos tu historial de navegación'}
            </OptionDescription>
          </div>
          <Switch
            checked={preferences.privacy[key]}
            onChange={(e) => setPrivacySetting(key, e.target.checked)}
            inputProps={{
              'aria-label':
                t[
                  key === 'publicProfile'
                    ? 'privacyPublicProfile'
                    : key === 'shareActivity'
                      ? 'privacyShareActivity'
                      : 'privacySaveHistory'
                ],
            }}
            id={
              ACCESSIBILITY_IDS[
                key === 'publicProfile'
                  ? 'privacyPublicProfile'
                  : key === 'shareActivity'
                    ? 'privacyShareActivity'
                    : 'privacySaveHistory'
              ]
            }
          />
        </OptionRow>
      ))}
    </>
  );

  if (isLoading) {
    return (
      <StyledSettingsContainer data-testid={SETTINGS_TEST_IDS.container}>
        <Typography variant="h6" textAlign="center">
          Cargando preferencias...
        </Typography>
      </StyledSettingsContainer>
    );
  }

  const DesktopLayout = () => (
    <>
      <SectionCard data-testid={SETTINGS_TEST_IDS.themeSection}>
        <SectionTitle>{t.sectionTheme}</SectionTitle>
        <OptionGroup>
          <OptionRow>
            <OptionDescription>{t.theme}</OptionDescription>
            <Switch
              checked={preferences.theme === 'dark'}
              onChange={toggleTheme}
              inputProps={{ 'aria-label': t.theme }}
              id={ACCESSIBILITY_IDS.themeSwitch}
            />
          </OptionRow>
        </OptionGroup>
      </SectionCard>

      <SectionCard data-testid={SETTINGS_TEST_IDS.notificationsSection}>
        <SectionTitle>{t.sectionNotifications}</SectionTitle>
        <OptionGroup>
          <OptionRow>
            <OptionDescription>{t.notifications}</OptionDescription>
            <Switch
              checked={preferences.notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              inputProps={{ 'aria-label': t.notifications }}
              id={ACCESSIBILITY_IDS.notificationsSwitch}
            />
          </OptionRow>
        </OptionGroup>
      </SectionCard>

      <SectionCard data-testid={SETTINGS_TEST_IDS.languageSection}>
        <SectionTitle>{t.sectionLanguage}</SectionTitle>
        <OptionGroup>
          <OptionRow>
            <FormControl fullWidth>
              <InputLabel id="language-select-label">{t.language}</InputLabel>
              <Select
                labelId="language-select-label"
                id={ACCESSIBILITY_IDS.languageSelect}
                value={preferences.language}
                label={t.language}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e) => setLanguage(e.target.value as any)}
              >
                {LANGUAGE_OPTIONS.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </OptionRow>
        </OptionGroup>
      </SectionCard>

      <SectionCard data-testid={SETTINGS_TEST_IDS.privacySection}>
        <SectionTitle>{t.sectionPrivacy}</SectionTitle>
        <PrivacyBox>
          <PrivacySwitches />
        </PrivacyBox>
      </SectionCard>
    </>
  );

  const MobileLayout = () => (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <SectionTitle>{t.sectionTheme}</SectionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <OptionRow>
            <OptionDescription>{t.theme}</OptionDescription>
            <Switch
              checked={preferences.theme === 'dark'}
              onChange={toggleTheme}
              inputProps={{ 'aria-label': t.theme }}
              id={ACCESSIBILITY_IDS.themeSwitch}
            />
          </OptionRow>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <SectionTitle>{t.sectionNotifications}</SectionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <OptionRow>
            <OptionDescription>{t.notifications}</OptionDescription>
            <Switch
              checked={preferences.notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              inputProps={{ 'aria-label': t.notifications }}
              id={ACCESSIBILITY_IDS.notificationsSwitch}
            />
          </OptionRow>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <SectionTitle>{t.sectionLanguage}</SectionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl fullWidth>
            <InputLabel id="mobile-language-select-label">{t.language}</InputLabel>
            <Select
              labelId="mobile-language-select-label"
              value={preferences.language}
              label={t.language}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e) => setLanguage(e.target.value as any)}
            >
              {LANGUAGE_OPTIONS.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <SectionTitle>{t.sectionPrivacy}</SectionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <PrivacyBox>
            <PrivacySwitches />
          </PrivacyBox>
        </AccordionDetails>
      </Accordion>
    </>
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <StyledSettingsContainer forceMobile={isMobileView} data-testid={SETTINGS_TEST_IDS.container}>
        <SettingsLayout direction="column" spacing={4}>
          {isMobileView ? <MobileLayout /> : <DesktopLayout />}
        </SettingsLayout>
      </StyledSettingsContainer>
    </ThemeProvider>
  );
});

SettingsPage.displayName = 'SettingsPage';
