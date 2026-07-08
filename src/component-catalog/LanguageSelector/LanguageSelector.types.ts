import type { SupportedLanguage } from '../../i18n';

export interface LanguageSelectorProps {
  value?: SupportedLanguage;
  onChange?: (language: SupportedLanguage) => void;
  compact?: boolean;
}
