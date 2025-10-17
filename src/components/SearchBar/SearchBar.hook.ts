
import { useState } from 'react';

export const useSearchBar = (onSearch?: (value: string) => void) => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onSearch) onSearch(value);
    };

    const handleSearchClick = () => {
        if (onSearch) onSearch(value);
    };

    return { value, handleChange, handleKeyDown, handleSearchClick };
};
