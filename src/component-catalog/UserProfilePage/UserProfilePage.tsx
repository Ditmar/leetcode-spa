import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useUserProfilePage } from './UserProfilePage.hook';
import {
  avatarSx,
  containerSx,
  headerSx,
  sectionTitleSx,
  statCardSx,
} from './UserProfilePage.styles';

import type { UserProfilePageProps } from './UserProfilePage.types';

export function UserProfilePage({ profile, stats }: UserProfilePageProps) {
  const { displayName, solvedCount, easyCount, mediumCount, hardCount, streak, acceptanceRate } =
    useUserProfilePage({ profile, stats });

  return (
    <Box sx={containerSx}>
      <Stack sx={headerSx}>
        <Avatar src={profile.avatarUrl} alt={displayName} sx={avatarSx} />
        <Stack spacing={0.5}>
          <Typography variant="h4" component="h1" fontWeight={700}>
            {displayName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            @{profile.username}
          </Typography>
          {profile.bio && (
            <Typography variant="body2" color="text.secondary">
              {profile.bio}
            </Typography>
          )}
          <Typography variant="caption" color="text.secondary">
            Miembro desde {new Date(profile.joinedAt).getFullYear()}
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h6" sx={sectionTitleSx}>
        Estadísticas
      </Typography>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={6} sm={3}>
          <Paper elevation={1} sx={statCardSx}>
            <Typography variant="h5" fontWeight={700}>
              {solvedCount}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Resueltos
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={1} sx={statCardSx}>
            <Typography variant="h5" fontWeight={700} color="success.main">
              {easyCount}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Fácil
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={1} sx={statCardSx}>
            <Typography variant="h5" fontWeight={700} color="warning.main">
              {mediumCount}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Medio
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={1} sx={statCardSx}>
            <Typography variant="h5" fontWeight={700} color="error.main">
              {hardCount}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Difícil
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={1} sx={statCardSx}>
            <Typography variant="h5" fontWeight={700}>
              {streak}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Racha actual (días)
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={1} sx={statCardSx}>
            <Typography variant="h5" fontWeight={700}>
              {acceptanceRate.toFixed(1)}%
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Tasa de aceptación
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {profile.badges?.length > 0 && (
        <Box mt={4}>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h6" sx={sectionTitleSx}>
            Insignias
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {profile.badges.map((badge) => (
              <Chip key={badge.id} label={badge.name} variant="outlined" />
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default UserProfilePage;
