import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TerminalIcon from '@mui/icons-material/Terminal';
import {
  Dialog,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  IconButton,
  InputAdornment,
  CircularProgress,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

import { AUTH_MODAL_LABELS } from './AuthModal.constants';
import { useAuthModal } from './AuthModal.hook';
import {
  StyledDialogContent,
  HeaderContainer,
  IconCircle,
  SocialButtonContainer,
} from './AuthModal.styles';
import { type AuthModalProps, AuthMode } from './AuthModal.types';

export function AuthModal({ isOpen, onClose, initialMode }: AuthModalProps): React.ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { mode, formMethods, isLoading, toggleMode, onSubmit } = useAuthModal(initialMode);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const labels = AUTH_MODAL_LABELS[mode];

  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullScreen={isMobile}
      maxWidth="xs"
      fullWidth
      aria-labelledby="auth-modal-title"
      PaperProps={{
        sx: { borderRadius: isMobile ? 0 : 3, position: 'relative' },
      }}
    >
      <IconButton
        aria-label="close modal"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          width: 44,
          height: 44,
          color: 'text.secondary',
        }}
      >
        <CloseIcon />
      </IconButton>

      <StyledDialogContent>
        <HeaderContainer>
          <IconCircle>
            <TerminalIcon />
          </IconCircle>
          <Typography id="auth-modal-title" variant="h5" fontWeight="600" color="text.primary">
            {labels.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {labels.subtitle}
          </Typography>
        </HeaderContainer>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          {mode === AuthMode.SIGN_UP && (
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  type="text"
                  autoComplete="name"
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          )}

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                id="password"
                label="Password"
                type="password"
                autoComplete={mode === AuthMode.SIGN_IN ? 'current-password' : 'new-password'}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          {mode === AuthMode.SIGN_UP && (
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  autoComplete="new-password"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          )}

          {mode === AuthMode.SIGN_IN && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Controller
                name="rememberMe"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} checked={field.value} color="success" />}
                    label={<Typography variant="body2">Remember me</Typography>}
                  />
                )}
              />
              <Typography
                variant="body2"
                component="a"
                href="#"
                sx={{
                  color: 'success.main',
                  textDecoration: 'none',
                  fontWeight: 500,
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Forgot password?
              </Typography>
            </Box>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            endIcon={!isLoading && <ArrowForwardIcon />}
            sx={{
              bgcolor: 'success.main',
              py: 1.5,
              '&:hover': { bgcolor: 'success.dark' },
            }}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : labels.submitText}
          </Button>
        </Box>

        <Divider sx={{ typography: 'body2', color: 'text.secondary', my: 1 }}>
          OR CONTINUE WITH
        </Divider>

        <SocialButtonContainer>
          <Button
            fullWidth
            variant="outlined"
            color="inherit"
            aria-label="Sign in with Google"
            startIcon={<GoogleIcon />}
            sx={{ py: 1, borderColor: 'divider' }}
          >
            Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="inherit"
            aria-label="Sign in with GitHub"
            startIcon={<GitHubIcon />}
            sx={{ py: 1, borderColor: 'divider' }}
          >
            GitHub
          </Button>
        </SocialButtonContainer>

        <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 1 }}>
          {labels.toggleText}{' '}
          <Box
            component="span"
            onClick={toggleMode}
            sx={{
              color: 'success.main',
              cursor: 'pointer',
              fontWeight: 500,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            {labels.toggleAction}
          </Box>
        </Typography>
      </StyledDialogContent>
    </Dialog>
  );
}
