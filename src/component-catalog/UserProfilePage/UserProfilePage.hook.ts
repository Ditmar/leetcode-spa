import type { UserProfilePageProps } from './UserProfilePage.types';

export function useUserProfilePage({ profile, stats }: UserProfilePageProps) {
  const displayName = profile.displayName ?? profile.username;

  const solvedCount = stats?.totalSolved ?? 0;
  const easyCount = stats?.easySolved ?? 0;
  const mediumCount = stats?.mediumSolved ?? 0;
  const hardCount = stats?.hardSolved ?? 0;
  const streak = stats?.currentStreak ?? 0;
  const acceptanceRate = stats?.acceptanceRate ?? 0;

  return {
    displayName,
    solvedCount,
    easyCount,
    mediumCount,
    hardCount,
    streak,
    acceptanceRate,
  };
}
