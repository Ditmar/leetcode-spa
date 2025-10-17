
import { useState, useCallback } from 'react';

export const useSearchBar = (
    initialValue: string = '',
    onSearch?: (value: string) => void
) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
        },
        [] // No depende de onSearch
    );

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && onSearch) {
                onSearch(value);
            }
        },
        [value, onSearch]
    );

    const handleSearchClick = useCallback(() => {
        if (onSearch) {
            onSearch(value);
        }
    }, [value, onSearch]);

    const clear = useCallback(() => {
        setValue('');
    }, []);

    return {
        value,
        setValue,
        handleChange,
        handleKeyDown,
        handleSearchClick,
        clear,
    };
};
/*
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
*/