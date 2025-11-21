import fullLogoUrl from '../../assets/full_logo.svg';
import logoUrl from '../../assets/logo.svg';

import type { LogoProps } from './Logo.types';

export const Logo = ({
  orientation = 'vertical',
  width,
  height,
  className = '',
  alt = 'App logo',
}: LogoProps) => {
  const imageImport = orientation === 'horizontal' ? fullLogoUrl : logoUrl;
  const src = typeof imageImport === 'string' ? imageImport : (imageImport as { src?: string }).src;
  return <img className={className} src={src} alt={alt} width={width} height={height} />;
};
