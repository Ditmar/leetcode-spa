import type { LogoProps } from './Logo.types';
import logoUrl from '../../assets/logo.svg';
import fullLogoUrl from '../../assets/full_logo.svg';

export const Logo = ({
  orientation = 'vertical',
  width,
  height,
  className = '',
  alt = 'App logo',
  ...rest
}: LogoProps) => {
  const imageImport = orientation === 'horizontal' ? fullLogoUrl : logoUrl;
  const src = typeof imageImport === 'string' ? imageImport : (imageImport as { src?: string }).src;
  return <img className={className} src={src} alt={alt} width={width} height={height} />;
};
