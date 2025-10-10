import type { Meta, StoryObj } from '@storybook/react';
import { PillTag } from './PillTag';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { colors, typography } from '../../globals';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary.main,
            light: colors.primary.light,
            dark: colors.primary.dark,
            contrastText: colors.primary.contrastText,
        },
        secondary: {
            main: colors.secondary.main,
            light: colors.secondary.light,
            dark: colors.secondary.dark,
            contrastText: colors.secondary.contrastText,
        },
        background: {
            default: colors.background.default,
            paper: colors.background.paper,
        },
    },
    typography: {
        fontFamily: typography.fontFamily.primary,
    },
});

const meta: Meta<typeof PillTag> = {
    title: 'Components/PillTag',
    component: PillTag,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `
PillTag Component usando Design Tokens globales (src/globals/).

**Características:**
- Tokens centralizados en src/globals/
- Pixel-perfect según Figma
- WCAG AA compliant
- 10 tests unitarios
                `,
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Texto a mostrar en el tag',
        },
        variant: {
            control: 'radio',
            options: ['primary', 'secondary'],
            description: 'Variante visual',
        },
        clickable: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof PillTag>;

export const Primary: Story = {
    render: (args) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ p: 4 }}>
                <PillTag {...args} />
            </Box>
        </ThemeProvider>
    ),
    args: {
        label: 'Courses',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    render: (args) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ p: 4 }}>
                <PillTag {...args} />
            </Box>
        </ThemeProvider>
    ),
    args: {
        label: 'Test',
        variant: 'secondary',
    },
};

export const Clickable: Story = {
    render: (args) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ p: 4 }}>
                <PillTag {...args} />
            </Box>
        </ThemeProvider>
    ),
    args: {
        label: 'Click me',
        variant: 'primary',
        clickable: true,
        onClick: () => console.log('Clicked!'),
    },
};

export const Deleteable: Story = {
    render: (args) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ p: 4 }}>
                <PillTag {...args} />
            </Box>
        </ThemeProvider>
    ),
    args: {
        label: 'Delete me',
        variant: 'secondary',
        onDelete: () => console.log('Deleted!'),
    },
};

export const Disabled: Story = {
    render: (args) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ p: 4 }}>
                <PillTag {...args} />
            </Box>
        </ThemeProvider>
    ),
    args: {
        label: 'Disabled',
        disabled: true,
    },
};

export const Multiple: Story = {
    render: () => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ p: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <PillTag label="React" variant="primary" />
                <PillTag label="TypeScript" variant="secondary" />
                <PillTag label="Astro" variant="primary" />
                <PillTag label="MUI" variant="secondary" />
            </Box>
        </ThemeProvider>
    ),
};
export const Comparison: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    sx={{
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                    }}
                >
                    <Story />
                </Box>
            </ThemeProvider>
        ),
    ],
    render: () => (
        <>
            <PillTag label="Courses" variant="primary" />
            <PillTag label="Test" variant="secondary" />
        </>
    ),
};