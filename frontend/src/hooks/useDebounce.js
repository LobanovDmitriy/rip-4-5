import { useEffect, useState } from 'react';

export const useDebounce = (value) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [value, debouncedValue]);

    return debouncedValue;
};