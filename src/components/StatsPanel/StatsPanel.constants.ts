import { WorkOutline, CheckCircleOutline, ThumbDownOffAlt, HourglassEmpty } from '@mui/icons-material';
import type { StatItemData } from './StatsPanel.types';

export const TEST_STATS: Record<string, StatItemData> = {
    total: { id: 'total', label: 'No of Tests', value: 32, icon: WorkOutline, color: 'primary' },
    passed: { id: 'passed', label: 'Passed', value: 12, icon: CheckCircleOutline, color: 'success' },
    failed: { id: 'failed', label: 'Failed', value: 19, icon: ThumbDownOffAlt, color: 'error' },
    waiting: { id: 'waiting', label: 'Waiting for result', value: 1, icon: HourglassEmpty, color: 'grey' },
};
