import styled from '@emotion/styled';

import { GRADIENT_PRIMARY } from './SignUpPage.constants';

// Contenedor de página con los radiales del Figma (aprox.)
// (visual: fondo suave + blur overlay; sin imágenes locales)
export const Page = styled.div`
  position: relative;
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 1fr min(520px, 40%);
  gap: 32px;
  align-items: center;
  padding: clamp(16px, 4vw, 48px);

  background:
    radial-gradient(27.33% 40.65% at 78.12% 29.89%, #ff7f85 0%, rgba(48, 83, 118, 0) 100%),
    radial-gradient(33.55% 50.83% at 55.38% 89.56%, #8cbcfe 0%, rgba(221, 130, 255, 0) 100%),
    radial-gradient(58.68% 99.14% at 0% 0%, #ff9649 0%, rgba(83, 214, 255, 0) 100%),
    radial-gradient(30.1% 50.86% at 100% 100%, #9949ff 0%, rgba(255, 81, 217, 0) 100%), #f5f5f5;

  &:before {
    /* máscara con blur como en Figma */
    content: '';
    position: absolute;
    inset: 0;
    backdrop-filter: blur(25px);
    background: rgba(245, 245, 245, 0.65);
    z-index: 0;
  }
`;

export const Left = styled.section`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 28px;
  align-content: center;
  max-width: 780px;
  padding-left: clamp(0px, 4vw, 24px);
`;

export const BrandRow = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: clamp(8px, 2vw, 12px);
`;

export const Brand = styled.div`
  font-family: Syne, system-ui, sans-serif;
  font-weight: 700;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.2;
  background: ${GRADIENT_PRIMARY};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(16px, 4vw, 32px);
  a {
    font-family: Syne, system-ui, sans-serif;
    font-size: clamp(14px, 2.2vw, 20px);
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &.login {
      background: ${GRADIENT_PRIMARY};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    &.signup {
      padding: 10px 20px;
      border-radius: 999px;
      background: ${GRADIENT_PRIMARY};
      opacity: 0.2;
      color: white;
    }
  }
`;

export const HeroTitle = styled.h1`
  font-family: Syne, system-ui, sans-serif;
  font-weight: 700;
  font-size: clamp(36px, 6vw, 90px);
  line-height: 1.1;
  margin: 0;
  background: ${GRADIENT_PRIMARY};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HeroSubtitle = styled.p`
  max-width: 650px;
  font-family: Syne, system-ui, sans-serif;
  font-size: clamp(16px, 2.2vw, 30px);
  line-height: 1.2;
  color: rgba(0, 0, 0, 0.7);
`;

export const HeroCTA = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  height: 64px;
  border-radius: 50px;
  background: ${GRADIENT_PRIMARY};
  color: white;
  font-family: Syne, system-ui, sans-serif;
  font-size: clamp(16px, 2.4vw, 20px);
`;

// Panel derecho (card)
export const Right = styled.aside`
  position: relative;
  z-index: 1;
  max-width: 520px;
  margin-inline: auto;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 36px;
  padding: clamp(20px, 4vw, 28px);
  box-shadow: 0 18px 66px rgba(0, 0, 0, 0.08);
`;

// Pie del formulario
export const RecaptchaText = styled.p`
  margin-top: 16px;
  text-align: center;
  color: #bcbcbc;
  font-family: Syne, system-ui, sans-serif;
  font-size: 14px;
`;

// Contenedor de iconos sociales
export const SocialRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding-top: 8px;
`;
