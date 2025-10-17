import { styled } from '@mui/material/styles';
import type { PaletteColor } from '@mui/material/styles';

export const CardContainer = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(2.5),
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    width: theme.spacing(32.5),
    boxShadow: theme.shadows[3],
}));

export const StatItem = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.75),
}));

export const IconWrapper = styled('div')(({ theme }) => ({
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.action.hover,
    opacity: 0.9,
}));


export const StatIcon = styled('div')<{ color: keyof import('@mui/material/styles').Palette }>(
    ({ theme, color }) => ({
        fontSize: theme.typography.h5.fontSize,
        color: (theme.palette[color] as PaletteColor).main || theme.palette.text.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    })
);

export const StatValue = styled('div')(({ theme }) => ({
    ...theme.typography.h6,
    fontWeight: 700,
    color: theme.palette.text.primary,
}));

export const StatText = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
}));

