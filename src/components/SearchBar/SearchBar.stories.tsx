import { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { DEFAULT_PROPS } from './SearchBar.constants';
import type { SearchBarProps } from './SearchBar.types';

export default {
    title: 'src/Components/SearchBar',
    component: SearchBar,
};
export const Default = () => <SearchBar />;

const ControlledSearchBar = (args: SearchBarProps) => {
    const [value, setValue] = useState(args.value ?? DEFAULT_PROPS.value);

    // Sincroniza el estado local cuando args.value cambia
    useEffect(() => {
        setValue(args.value ?? DEFAULT_PROPS.value);
    }, [args.value]);

    return (
        <SearchBar
            {...args}
            value={value}
            onSearch={(newValue) => {
                setValue(newValue); // Actualiza el estado local
                args.onSearch?.(newValue); // Llama a la acción de Storybook
            }}
        />
    );
};





/*import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import { DEFAULT_PROPS } from './SearchBar.constants';
import type { SearchBarProps } from './SearchBar.types';

const ControlledSearchBar = (args: SearchBarProps) => {
    const [value, setValue] = React.useState(args.value || DEFAULT_PROPS.value);

    return (
        <SearchBar
            {...args}
            value={value}
            onSearch={(newValue) => {
                setValue(newValue);
                args.onSearch?.(newValue);
            }}
        />
    );
};

const meta: Meta<typeof SearchBar> = {
    title: 'Components/SearchBar',
    component: SearchBar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },

    render: ControlledSearchBar,

    argTypes: {
        value: { control: 'text' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        onSearch: { action: 'onSearch called' },
    },

    args: {
        value: DEFAULT_PROPS.value,
        placeholder: DEFAULT_PROPS.placeholder,
        disabled: false,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInitialValue: Story = {
    args: {
        value: 'Query de ejemplo...',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        value: 'No se puede editar',
    },
};*/