import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { BUTTON_VARIANTS, BUTTON_SIZES, BUTTON_SHAPES } from './Button.constants';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Button con múltiples variantes, tamaños y formas sobre MUI.',
            },
        },
    },
    argTypes: {
        variant: { control: 'select', options: Object.keys(BUTTON_VARIANTS) },
        size: { control: 'select', options: Object.keys(BUTTON_SIZES) },
        shape: { control: 'select', options: Object.keys(BUTTON_SHAPES) },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        children: { control: 'text' },
        onClick: { action: 'clicked' },
    },
    args: {
        children: 'Click me',
        variant: 'primary',
        size: 'medium',
        shape: 'rounded',
        loading: false,
        disabled: false,
        fullWidth: false,
    },
};
export default meta;
type Story = StoryObj<typeof meta>;


export const Playground: Story = {};


export const Gallery: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <p>Para los estados primario</p>
                <Button variant="primary">Primary Button</Button>
            </div>
            <div style={{ textAlign: 'center' }}>
                <p>Secundario</p>
                <Button variant="secondary">Secondary Button</Button>
            </div>
            <div style={{ textAlign: 'center' }}>
                <p>Success</p>
                <Button variant="success">Success Button</Button>
            </div>
            <div style={{ textAlign: 'center' }}>
                <p>Error</p>
                <Button variant="error">Error Button</Button>
            </div>
        </div>
    ),
};

export const Primary: Story = { args: { variant: 'primary', children: 'Primary' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary' } };
export const Success: Story = { args: { variant: 'success', children: 'Success' } };
export const Error: Story = { args: { variant: 'error', children: 'Error' } };

