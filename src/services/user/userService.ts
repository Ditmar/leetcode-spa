import { apiClient } from '../api/apiClient';

import type {
  DeleteAccountPayload,
  UpdateProfilePayload,
  UploadAvatarResponse,
  UserPreferences,
  UserProfile,
  UserStats,
} from './userService.types';
import type { ApiError, RequestConfig } from '../api/apiClient.types';

const MAX_DISPLAY_NAME_LENGTH = 50;
const MAX_BIO_LENGTH = 256;
const MAX_AVATAR_SIZE_BYTES = 2 * 1024 * 1024;
const ALLOWED_AVATAR_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const DEFAULT_PREFERENCES: UserPreferences = {
  defaultLanguage: 'javascript',
  theme: 'system',
  editorFontSize: 14,
  editorTabSize: 2,
};

const createValidationError = (message: string): ApiError => ({
  status: 400,
  code: 'VALIDATION_ERROR',
  message,
});

const createCookieConfig = (cookies?: string): RequestConfig | undefined => {
  if (!cookies) return undefined;
  return { headers: { Cookie: cookies } };
};

const normalizeHeatmap = (stats: UserStats): UserStats => {
  const heatmapByDate = new Map<string, number>();
  stats.submissionHeatmap.forEach((day: { date: string; count: number }) => {
    heatmapByDate.set(day.date, day.count);
  });

  const today = new Date();
  const normalizedHeatmap = Array.from({ length: 365 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (364 - index));
    const dateKey = date.toISOString().slice(0, 10);
    return {
      date: dateKey,
      count: heatmapByDate.get(dateKey) ?? 0,
    };
  });

  return { ...stats, submissionHeatmap: normalizedHeatmap };
};

// Service functions
export const userService = {
  getProfile: async (userId?: string, cookies?: string): Promise<UserProfile> => {
    const path = userId ? `/users/${userId}` : '/users/me';
    const response = await apiClient.get<UserProfile>(path, createCookieConfig(cookies));
    return response.data;
  },

  getStats: async (userId?: string, cookies?: string): Promise<UserStats> => {
    const path = userId ? `/users/${userId}/stats` : '/users/me/stats';
    const response = await apiClient.get<UserStats>(path, createCookieConfig(cookies));
    return normalizeHeatmap(response.data);
  },

  getPreferences: async (cookies: string): Promise<UserPreferences> => {
    const response = await apiClient.get<Partial<UserPreferences>>(
      '/users/me/preferences',
      createCookieConfig(cookies)
    );

    return {
      defaultLanguage: response.data.defaultLanguage ?? DEFAULT_PREFERENCES.defaultLanguage,
      theme: response.data.theme ?? DEFAULT_PREFERENCES.theme,
      editorFontSize: response.data.editorFontSize ?? DEFAULT_PREFERENCES.editorFontSize,
      editorTabSize: response.data.editorTabSize ?? DEFAULT_PREFERENCES.editorTabSize,
    } as UserPreferences;
  },

  updateProfile: async (payload: UpdateProfilePayload): Promise<UserProfile> => {
    if (payload.displayName && payload.displayName.length > MAX_DISPLAY_NAME_LENGTH) {
      throw createValidationError(`Display name exceeds ${MAX_DISPLAY_NAME_LENGTH} chars.`);
    }
    if (payload.bio && payload.bio.length > MAX_BIO_LENGTH) {
      throw createValidationError(`Bio exceeds ${MAX_BIO_LENGTH} chars.`);
    }

    const response = await apiClient.put<UserProfile>('/users/me', payload);
    return response.data;
  },

  updatePreferences: async (payload: Partial<UserPreferences>): Promise<UserPreferences> => {
    const response = await apiClient.put<UserPreferences>('/users/me/preferences', payload);
    return response.data;
  },

  uploadAvatar: async (file: File): Promise<{ avatarUrl: string }> => {
    if (!ALLOWED_AVATAR_TYPES.includes(file.type)) {
      throw createValidationError('Invalid image format (JPEG, PNG, WEBP only).');
    }
    if (file.size > MAX_AVATAR_SIZE_BYTES) {
      throw createValidationError('Image too large (Max 2MB).');
    }

    const formData = new FormData();
    formData.append('avatar', file);
    const response = await apiClient.post<UploadAvatarResponse>('/users/me/avatar', formData);

    return { avatarUrl: response.data.avatarUrl };
  },

  deleteAccount: async (payload: DeleteAccountPayload): Promise<void> => {
    if (!payload || !payload.confirmationPassword) {
      throw createValidationError('Confirmation password is required for account deletion.');
    }

    await apiClient.delete('/users/me', payload as unknown as RequestConfig);
  },
};
