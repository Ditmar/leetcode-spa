import type { UserProfile, UserStats } from '../../services/user/userService.types';

export interface UserProfilePageProps {
  profile: UserProfile;
  stats?: UserStats | null;
}
