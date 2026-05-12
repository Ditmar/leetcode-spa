export interface Submission {
  id: string;
  problemId: string;
  problemTitle: string;
  status: string;
  submittedAt: string;
}

export interface UserStatsSummary {
  totalSolved: number;
  acceptanceRate: number;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  bio?: string;
  avatarUrl?: string;
  joinedAt: string; // ISO 8601
  role: 'user' | 'admin';
  badges: Badge[];
  stats: UserStatsSummary; // lightweight summary for nav/profile card
}

export interface UserStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number; // percentage 0-100
  currentStreak: number; //days
  maxStreak: number;
  submissionHeatmap: Array<{
    date: string; // YYYY-MM-DD
    count: number;
  }>;
  recentSubmissions: Submission[];
}

export interface UserPreferences {
  defaultLanguage: string; // 'javascript' | 'python' | 'cpp' | 'java' | 'cpp'
  theme: 'light' | 'dark' | 'system';
  editorFontSize: number; // 12-24, default 14
  editorTabSize: number; // 2 | 4
}

export interface Badge {
  id: string;
  name: string;
  iconUrl: string;
  earnedAt: string;
}

export interface UpdateProfilePayload {
  displayName?: string;
  bio?: string;
}

export interface DeleteAccountPayload {
  confirmationPassword: string;
}

export interface UploadAvatarResponse {
  avatarUrl: string;
}
