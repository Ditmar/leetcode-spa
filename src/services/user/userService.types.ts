export type SubmissionStatus =
  | 'Accepted'
  | 'Wrong Answer'
  | 'Time Limit Exceeded'
  | 'Runtime Error'
  | 'Compilation Error'
  | 'pending';

export interface Submission {
  id: string;
  problemId: string;
  problemTitle: string;
  status: SubmissionStatus;
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

export interface HeatmapEntry {
  date: string; // YYYY-MM-DD
  count: number;
}
export interface UserStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number; // percentage 0-100
  currentStreak: number; //days
  maxStreak: number;
  submissionHeatmap: HeatmapEntry[];
  recentSubmissions: Submission[];
}

export type SupportedLanguage = 'javascript' | 'python' | 'java' | 'cpp';
export interface UserPreferences {
  defaultLanguage: SupportedLanguage;
  theme: 'light' | 'dark' | 'system';
  editorFontSize: number; // 12-24, default 14
  editorTabSize: 2 | 4;
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
