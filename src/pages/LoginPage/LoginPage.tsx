
import React from 'react';
import {
  Link,
  Typography,
  CircularProgress,
  Box,
  Alert,
  InputAdornment,
  IconButton as MuiIconButton,
} from '@mui/material';

import {
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

import googleIconUrl from '../../assets/google.svg';
import githubIconUrl from '../../assets/github.svg';
import facebookIconUrl from '../../assets/facebook.svg';
import appLogoUrl from '../../assets/logo.svg';

import { useLoginPage } from './LoginPage.hook';
import * as S from './LoginPage.styles';

const LoginPage: React.FC = () => {
  const { formState, errors, isLoading, apiError, handleChange, handleSubmit } =
    useLoginPage();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <S.PageRoot container>

      <S.RightPanel item xs={12} md={12} lg={12}>

        <S.FormContainer elevation={3}>

          <S.LogoWrapper>
            <img src={appLogoUrl} alt="Logo de la Aplicación" />
          </S.LogoWrapper>

          <S.StyledForm onSubmit={handleSubmit} noValidate>

            <S.FormInput
              id="email"
              name="email"
              placeholder="Mail Id"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              value={formState.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              disabled={isLoading}
              autoComplete="email"
            />

            <S.FormInput
              id="password"
              name="password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              fullWidth
              required
              value={formState.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              disabled={isLoading}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MuiIconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </MuiIconButton>
                  </InputAdornment>
                ),
              }}
            />

            {apiError && (
              <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
                {apiError}
              </Alert>
            )}

            <S.LoginButton
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login"
              )}
            </S.LoginButton>

          </S.StyledForm>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              mt: 1,
            }}
          >
            <Link
              href="/forgot-password"
              variant="body2"
              underline="none"
              sx={{ color: '#BCBCBC' }}
            >
              Forget Password ?
            </Link>

            <Link
              href="/signup"
              variant="body2"
              fontWeight="bold"
              underline="none"
              sx={{ color: '#B441EB' }}
            >
              Sign Up
            </Link>
          </Box>

          <S.DividerText variant="body2" component="div">
            <span>Or you can Signup with</span>
          </S.DividerText>


          <S.SocialIconsContainer>
            <S.SocialIconButton aria-label="Login con Google">
              <img src={googleIconUrl} alt="Google" />
            </S.SocialIconButton>
            <S.SocialIconButton aria-label="Login con GitHub">
              <img src={githubIconUrl} alt="GitHub" />
            </S.SocialIconButton>
            <S.SocialIconButton aria-label="Login con Facebook">
              <img src={facebookIconUrl} alt="Facebook" />
            </S.SocialIconButton>
          </S.SocialIconsContainer>


          <Typography
            variant="caption"
            align="center"
            sx={{ mt: 3, maxWidth: '350px', color: '#BCBCBC' }}
          >
            This site is protected by reCAPTCHA and the Google
            <Link
              href="#"
              variant="caption"
              underline="always"
              sx={{
                mx: 0.5,
                color: '#BCBCBC',
                textDecorationColor: '#BCBCBC'
              }}
            >
              Privacy Policy
            </Link>
            and
            <Link
              href="#"
              variant="caption"
              underline="always"
              sx={{
                ml: 0.5,
                color: '#BCBCBC',
                textDecorationColor: '#BCBCBC'
              }}
            >
              Terms of Service
            </Link>{' '}
            apply.
          </Typography>

        </S.FormContainer>
      </S.RightPanel>
    </S.PageRoot>
  );
};

export default LoginPage;