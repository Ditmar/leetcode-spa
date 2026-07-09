import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect, useId, useState } from 'react';
import { useTranslation } from 'react-i18next';

import i18n, {
  DEFAULT_LANGUAGE,
  getPreferredLanguage,
  persistLanguage,
  setDocumentLanguage,
  type SupportedLanguage,
} from '../../i18n';

import { formControlStyles, selectStyles } from './LanguageSelector.styles';

import type { LanguageSelectorProps } from './LanguageSelector.types';
import type { SelectChangeEvent } from '@mui/material';

const isSupportedLanguage = (language: string): language is SupportedLanguage =>
  language === 'en' || language === 'es';

export function LanguageSelector({ value, onChange, compact = false }: LanguageSelectorProps) {
  const { t } = useTranslation();
  const labelId = useId();

  const currentI18nLanguage = isSupportedLanguage(i18n.resolvedLanguage ?? '')
    ? i18n.resolvedLanguage
    : DEFAULT_LANGUAGE;

  const [internalLanguage, setInternalLanguage] = useState<SupportedLanguage>(currentI18nLanguage);

  const selectedLanguage = value ?? internalLanguage;

  useEffect(() => {
    if (value !== undefined) {
      return;
    }

    const preferredLanguage = getPreferredLanguage();

    setInternalLanguage(preferredLanguage);
    setDocumentLanguage(preferredLanguage);

    if (i18n.resolvedLanguage !== preferredLanguage) {
      void i18n.changeLanguage(preferredLanguage);
    }
  }, [value]);

  useEffect(() => {
    setDocumentLanguage(selectedLanguage);
  }, [selectedLanguage]);

  useEffect(() => {
    const handleLanguageChanged = (language: string) => {
      if (value === undefined && isSupportedLanguage(language)) {
        setInternalLanguage(language);
      }
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [value]);

  const handleChange = (event: SelectChangeEvent<SupportedLanguage>) => {
    const nextLanguage = event.target.value;

    if (!isSupportedLanguage(nextLanguage)) {
      return;
    }

    if (value === undefined) {
      setInternalLanguage(nextLanguage);
    }

    persistLanguage(nextLanguage);
    setDocumentLanguage(nextLanguage);
    void i18n.changeLanguage(nextLanguage);
    onChange?.(nextLanguage);
  };

  return (
    <FormControl size="small" sx={formControlStyles}>
      {!compact && <InputLabel id={labelId}>{t('language.label')}</InputLabel>}

      <Select
        labelId={compact ? undefined : labelId}
        value={selectedLanguage}
        label={compact ? undefined : t('language.label')}
        SelectDisplayProps={{
          'aria-label': compact ? t('language.label') : undefined,
        }}
        onChange={handleChange}
        sx={selectStyles}
      >
        <MenuItem value="en">{compact ? 'EN' : t('language.english')}</MenuItem>
        <MenuItem value="es">{compact ? 'ES' : t('language.spanish')}</MenuItem>
      </Select>
    </FormControl>
  );
}
