import fullLogoUrl from '../../assets/full_logo.svg';
import verticalLogoUrl from '../../assets/vertical_logo.svg';

import type { LogoProps } from './Logo.types';

export const Logo = ({
  orientation = 'vertical',
  width = '192px',
  height = '88px',
  className = '',
  alt = 'App logo',
}: LogoProps) => {
  const imageImport = orientation === 'horizontal' ? fullLogoUrl : verticalLogoUrl;
  const src = typeof imageImport === 'string' ? imageImport : (imageImport as { src?: string }).src;
  return <img className={className} src={src} alt={alt} width={width} height={height} />;
};
