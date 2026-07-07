import { useCallback, useEffect, useState } from 'react';

import type { ContestDetail } from '../../services/contests/contestsService.types';

export function useContestEnrollment(
  contest: ContestDetail,
  onEnroll: (id: number) => Promise<void>
) {
  const [isRegistered, setIsRegistered] = useState(contest.isRegistered ?? false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = useCallback(() => setModalOpen(true), []);
  const handleCloseModal = useCallback(() => setModalOpen(false), []);

  const handleConfirmEnroll = useCallback(async () => {
    setIsLoading(true);
    setIsRegistered(true);
    handleCloseModal();
    try {
      await onEnroll(contest.id);
    } catch {
      setIsRegistered(false);
    } finally {
      setIsLoading(false);
    }
  }, [contest.id, onEnroll, handleCloseModal]);

  return {
    isRegistered,
    isLoading,
    modalOpen,
    handleOpenModal,
    handleCloseModal,
    handleConfirmEnroll,
  };
}

export function useContestCountdown(startTime: string, onExpire?: () => void) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    function calculate() {
      const diff = new Date(startTime).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft('00:00:00');
        onExpire?.();
        return;
      }
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1_000);
      setTimeLeft(
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
      );
    }
    calculate();
    const id = setInterval(calculate, 1_000);
    return () => clearInterval(id);
  }, [startTime, onExpire]);

  return { timeLeft };
}
