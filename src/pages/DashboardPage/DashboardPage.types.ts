// DashboardPage.types.ts
import type { LeaderboardUser } from '../../components/LeaderboardPage/LeaderboardPage.types';

/**
 * Props que el Dashboard podría recibir.
 * Por ejemplo, usuario actual o configuración inicial.
 */
export type DashboardProps = {
  currentUser?: {
    id: string;
    fullName: string;
    avatarUrl?: string;
  };
};

/**
 * Props para contenedores responsivos.
 * Se usa en styled-components como ResponsiveContainer o Frame66Container.
 */
export type ResponsiveProps = {
  isMobile: boolean;
};

/**
 * Estructura de datos para las tarjetas de Tests.
 * Se usa en TestCard.
 */
export type TestCardData = {
  title: string;
  description: string;
  logo: string;
  onSelect: () => void;
};

/**
 * Estructura de datos para las tarjetas de Stats.
 * Se usa en StatsCard.
 */
export type StatsCardData = {
  value: string | number;
  label: string;
};

/**
 * Tipado del Leaderboard usado dentro del Dashboard.
 * Se puede mapear a LeaderboardPage o manejar en un hook central.
 */
export type DashboardLeaderboard = {
  users: LeaderboardUser[];
  loading: boolean;
  error: string | null;
};

/**
 * Retorno de un hook central del Dashboard.
 * Contiene Tests, Stats y Leaderboard, además de estados de carga y error.
 */
export type UseDashboardHook = {
  tests: TestCardData[];
  stats: StatsCardData[];
  leaderboard: DashboardLeaderboard;
  loading: boolean;
  error: string | null;
};
