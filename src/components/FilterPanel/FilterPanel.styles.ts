// FilterPanel.styles.ts
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import type { Theme } from '@mui/material/styles';
import type { FilterVariant } from './FilterPanel.types';

export const FilterPanelContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    border: `1px dashed ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    gap: theme.spacing(0.5),
    width: '100%',
    backgroundColor: theme.palette.background.paper,
}));

export const FilterButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'selected' && prop !== 'filterVariant',
})<{
    selected?: boolean;
    filterVariant?: FilterVariant;
}>(({ theme, selected, filterVariant }: { theme: Theme; selected?: boolean; filterVariant?: FilterVariant }) => {
    const isPrimary = filterVariant === 'primary' || !filterVariant;
    const secondaryFill = theme.palette.mode === 'light'
        ? theme.palette.secondary.light
        : theme.palette.secondary.dark;

    return {
        justifyContent: 'flex-start',
        width: '100%',
        textTransform: 'none',
        borderRadius: theme.shape.borderRadius,
        margin: 0,
        padding: theme.spacing(1.5),
        // Background según variant y selected
        backgroundColor: selected
            ? isPrimary
                ? theme.palette.primary.main
                : secondaryFill
            : 'transparent',
        color: selected
            ? theme.palette.getContrastText(selected ? (isPrimary ? theme.palette.primary.main : secondaryFill) : theme.palette.background.paper)
            : theme.palette.text.primary,
        border: selected
            ? isPrimary
                ? `2px solid ${theme.palette.primary.main}`
                : `2px solid ${theme.palette.secondary.main}`
            : `1px dashed ${isPrimary ? theme.palette.divider : theme.palette.secondary.main}`,
        '&:hover': {
            backgroundColor: selected
                ? isPrimary
                    ? theme.palette.primary.dark
                    : theme.palette.secondary.main
                : isPrimary
                    ? theme.palette.action.hover
                    : theme.palette.action.selected,
        },
        '&:focus-visible': {
            outline: `2px solid ${theme.palette.action.focus}`,
            outlineOffset: theme.spacing(0.5),
        },
        transition: theme.transitions.create(['background-color', 'border-color', 'color'], {
            duration: theme.transitions.duration.short,
        }),
    };
});
