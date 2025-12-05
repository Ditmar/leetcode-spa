import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import React from 'react';

import { LANGUAGE_OPTIONS, SETTINGS_LABELS, ACCESSIBILITY_IDS } from './SettingsPage.constants';
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

export const SettingsPage: React.FC<SettingsPageProps> = ({ forceMobile }) => {
  const { preferences, isLoading, toggleTheme, setNotifications, setLanguage, setPrivacySetting } =
    useSettingsPage();

  if (isLoading) return <div>Loading...</div>;
  const muiTheme = createTheme({
    palette: {
      mode: preferences.theme,
    },
  });

  const isMobile = forceMobile ?? window.innerWidth < 600;

  const labels = SETTINGS_LABELS[preferences.language];

  const renderThemeSection = () => (
    <SectionCard>
      <SectionTitle>{labels.sectionTheme}</SectionTitle>
      <OptionGroup>
        <OptionRow>
          <OptionDescription>{labels.theme}</OptionDescription>
          <Switch
            id={ACCESSIBILITY_IDS.themeSwitch}
            checked={preferences.theme === 'dark'}
            onChange={toggleTheme}
            inputProps={{ 'aria-label': labels.theme }}
          />
        </OptionRow>
      </OptionGroup>
    </SectionCard>
  );

  const renderNotificationsSection = () => (
    <SectionCard>
      <SectionTitle>{labels.sectionNotifications}</SectionTitle>
      <OptionGroup>
        <OptionRow>
          <OptionDescription>{labels.notifications}</OptionDescription>
          <Switch
            id={ACCESSIBILITY_IDS.notificationsSwitch}
            checked={preferences.notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            inputProps={{ 'aria-label': labels.notifications }}
          />
        </OptionRow>
      </OptionGroup>
    </SectionCard>
  );

  const renderLanguageSection = () => (
    <SectionCard>
      <SectionTitle>{labels.sectionLanguage}</SectionTitle>
      <OptionGroup>
        <OptionRow>
          <FormControl fullWidth>
            <InputLabel id="language-select-label">{labels.language}</InputLabel>
            <Select
              labelId="language-select-label"
              id={ACCESSIBILITY_IDS.languageSelect}
              value={preferences.language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {LANGUAGE_OPTIONS.map((lang) => (
                <MenuItem key={lang.value} value={lang.value}>
                  {lang.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </OptionRow>
      </OptionGroup>
    </SectionCard>
  );

  const renderPrivacySection = () => {
    const PRIVACY_LABELS: Record<keyof typeof preferences.privacy, string> = {
      publicProfile: labels.privacyPublicProfile,
      shareActivity: labels.privacyShareActivity,
      saveHistory: labels.privacySaveHistory,
    };

    const PRIVACY_IDS: Record<keyof typeof preferences.privacy, string> = {
      publicProfile: ACCESSIBILITY_IDS.privacyPublicProfile,
      shareActivity: ACCESSIBILITY_IDS.privacyShareActivity,
      saveHistory: ACCESSIBILITY_IDS.privacySaveHistory,
    };

    return (
      <SectionCard>
        <SectionTitle>{labels.sectionPrivacy}</SectionTitle>
        <PrivacyBox>
          {(Object.keys(preferences.privacy) as Array<keyof typeof preferences.privacy>).map(
            (key) => (
              <OptionRow key={key}>
                <OptionDescription>{PRIVACY_LABELS[key]}</OptionDescription>
                <Switch
                  checked={preferences.privacy[key]}
                  onChange={(e) => setPrivacySetting(key, e.target.checked)}
                  inputProps={{ 'aria-label': PRIVACY_LABELS[key] }}
                  id={PRIVACY_IDS[key]}
                />
              </OptionRow>
            ),
          )}
        </PrivacyBox>
      </SectionCard>
    );
  };

  if (isMobile) {
    const renderThemeContent = () => (
      <OptionGroup>
        <OptionRow>
          <OptionDescription>{labels.theme}</OptionDescription>
          <Switch
            id={ACCESSIBILITY_IDS.themeSwitch}
            checked={preferences.theme === 'dark'}
            onChange={toggleTheme}
            inputProps={{ 'aria-label': labels.theme }}
          />
        </OptionRow>
      </OptionGroup>
    );

    const renderNotificationsContent = () => (
      <OptionGroup>
        <OptionRow>
          <OptionDescription>{labels.notifications}</OptionDescription>
          <Switch
            id={ACCESSIBILITY_IDS.notificationsSwitch}
            checked={preferences.notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            inputProps={{ 'aria-label': labels.notifications }}
          />
        </OptionRow>
      </OptionGroup>
    );

    const renderLanguageContent = () => (
      <OptionGroup>
        <OptionRow>
          <FormControl fullWidth>
            <InputLabel id="language-select-label">{labels.language}</InputLabel>
            <Select
              labelId="language-select-label"
              id={ACCESSIBILITY_IDS.languageSelect}
              value={preferences.language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {LANGUAGE_OPTIONS.map((lang) => (
                <MenuItem key={lang.value} value={lang.value}>
                  {lang.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </OptionRow>
      </OptionGroup>
    );

    const renderPrivacyContent = () => {
      const PRIVACY_LABELS: Record<keyof typeof preferences.privacy, string> = {
        publicProfile: labels.privacyPublicProfile,
        shareActivity: labels.privacyShareActivity,
        saveHistory: labels.privacySaveHistory,
      };

      const PRIVACY_IDS: Record<keyof typeof preferences.privacy, string> = {
        publicProfile: ACCESSIBILITY_IDS.privacyPublicProfile,
        shareActivity: ACCESSIBILITY_IDS.privacyShareActivity,
        saveHistory: ACCESSIBILITY_IDS.privacySaveHistory,
      };

      return (
        <PrivacyBox>
          {(Object.keys(preferences.privacy) as Array<keyof typeof preferences.privacy>).map(
            (key) => (
              <OptionRow key={key}>
                <OptionDescription>{PRIVACY_LABELS[key]}</OptionDescription>
                <Switch
                  checked={preferences.privacy[key]}
                  onChange={(e) => setPrivacySetting(key, e.target.checked)}
                  inputProps={{ 'aria-label': PRIVACY_LABELS[key] }}
                  id={PRIVACY_IDS[key]}
                />
              </OptionRow>
            ),
          )}
        </PrivacyBox>
      );
    };

    return (
      <ThemeProvider theme={muiTheme}>
        <StyledSettingsContainer>
          <SettingsLayout>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {labels.sectionTheme}
              </AccordionSummary>
              <AccordionDetails>{renderThemeContent()}</AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {labels.sectionNotifications}
              </AccordionSummary>
              <AccordionDetails>{renderNotificationsContent()}</AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {labels.sectionLanguage}
              </AccordionSummary>
              <AccordionDetails>{renderLanguageContent()}</AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {labels.sectionPrivacy}
              </AccordionSummary>
              <AccordionDetails>{renderPrivacyContent()}</AccordionDetails>
            </Accordion>
          </SettingsLayout>
        </StyledSettingsContainer>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <StyledSettingsContainer>
        <SettingsLayout>
          {renderThemeSection()}
          {renderNotificationsSection()}
          {renderLanguageSection()}
          {renderPrivacySection()}
        </SettingsLayout>
      </StyledSettingsContainer>
    </ThemeProvider>
  );
};
