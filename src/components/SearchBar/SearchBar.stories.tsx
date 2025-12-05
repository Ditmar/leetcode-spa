import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import { action } from '@storybook/addon-actions';
import { DEFAULT_PLACEHOLDER } from './SearchBar.constants';

const meta: Meta<typeof SearchBar> = {
    title: 'Components/SearchBar',
    component: SearchBar,
    argTypes: {
        onSearch: { action: 'searched' },
        onChange: { action: 'changed' },
        value: { control: 'text' },
        debounceDelay: { control: 'number' },
    },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
    args: {
        placeholder: DEFAULT_PLACEHOLDER,
    },
};

export const Focused: Story = {
    args: {
        placeholder: DEFAULT_PLACEHOLDER,
        autoFocus: true,
    },
};

export const Controlled: Story = {
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = useState('');
        return (
            <SearchBar
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onSearch={(val) => {
                    action('searched')(val);
                    console.log('Search triggered:', val);
                }}
            />
        );
    },
    args: {
        placeholder: DEFAULT_PLACEHOLDER,
    },
};

export const CustomDebounce: Story = {
    args: {
        placeholder: DEFAULT_PLACEHOLDER,
        debounceDelay: 1000,
    },
};
