import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useContestCountdown, useContestEnrollment } from './ContestEnrollment.hook';
import { cardSx, countdownSx, modalSx, statusChipSx } from './ContestEnrollment.styles';

import type { ContestCountdownProps, ContestEnrollmentProps } from './ContestEnrollment.types';

const STATUS_LABELS: Record<string, { label: string; color: 'success' | 'warning' | 'default' }> = {
  active: { label: 'En curso', color: 'success' },
  upcoming: { label: 'Próximo', color: 'warning' },
  past: { label: 'Finalizado', color: 'default' },
};

export function ContestCountdown({ startTime, onExpire }: ContestCountdownProps) {
  const { timeLeft } = useContestCountdown(startTime, onExpire);
  return (
    <Typography sx={countdownSx} aria-label="Cuenta regresiva">
      {timeLeft}
    </Typography>
  );
}

export function ContestEnrollment({ contest, onEnroll, onStartContest }: ContestEnrollmentProps) {
  const {
    isRegistered,
    isLoading,
    modalOpen,
    handleOpenModal,
    handleCloseModal,
    handleConfirmEnroll,
  } = useContestEnrollment(contest, onEnroll);

  const statusInfo = STATUS_LABELS[contest.status] ?? STATUS_LABELS['past'];

  return (
    <Box sx={cardSx}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight={700}>
          {contest.title}
        </Typography>
        <Chip label={statusInfo.label} color={statusInfo.color} size="small" sx={statusChipSx} />
      </Stack>

      {contest.status === 'upcoming' && (
        <Stack spacing={1} mb={2}>
          <Typography variant="body2" color="text.secondary">
            Inicia en:
          </Typography>
          <ContestCountdown startTime={contest.startTime} />
        </Stack>
      )}

      <Stack direction="row" spacing={2} mt={2}>
        {contest.status === 'upcoming' && !isRegistered && (
          <Button
            variant="contained"
            onClick={handleOpenModal}
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={16} /> : null}
          >
            Inscribirse
          </Button>
        )}

        {contest.status === 'upcoming' && isRegistered && (
          <Button variant="outlined" disabled>
            Inscrito ✓
          </Button>
        )}

        {contest.status === 'active' && (
          <Button variant="contained" color="success" onClick={() => onStartContest(contest.id)}>
            Iniciar concurso
          </Button>
        )}

        {contest.status === 'past' && (
          <Button variant="outlined" disabled>
            Finalizado
          </Button>
        )}
      </Stack>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={modalSx}>
          <Typography variant="h6" mb={2}>
            Confirmar inscripción
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            ¿Deseas inscribirte en <strong>{contest.title}</strong>?
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button onClick={handleCloseModal} variant="outlined">
              Cancelar
            </Button>
            <Button onClick={handleConfirmEnroll} variant="contained" disabled={isLoading}>
              Confirmar
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}

export default ContestEnrollment;
