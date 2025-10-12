import { useState, useEffect } from 'react';
import type { ConsoleIOProps, ConsoleTab } from './ConsoleIO.types';

export function useConsoleIO({
    sampleValue = '',
    customValue = '',
    defaultTab = 'sample',
    onSampleChange,
    onCustomChange,
}: Pick<
    ConsoleIOProps,
    'sampleValue' | 'customValue' | 'defaultTab' | 'onSampleChange' | 'onCustomChange'
>) {
    const [activeTab, setActiveTab] = useState<ConsoleTab>(defaultTab);
    const [sampleInput, setSampleInput] = useState<string>(sampleValue);
    const [customInput, setCustomInput] = useState<string>(customValue);

    useEffect(() => {
        setSampleInput(sampleValue);
    }, [sampleValue]);

    useEffect(() => {
        setCustomInput(customValue);
    }, [customValue]);

    const handleTabChange = (tab: ConsoleTab) => {
        setActiveTab(tab);
    };

    const handleSampleChange = (value: string) => {
        setSampleInput(value);
        onSampleChange?.(value);
    };

    const handleCustomChange = (value: string) => {
        setCustomInput(value);
        onCustomChange?.(value);
    };

    return {
        activeTab,
        sampleInput,
        customInput,
        handleTabChange,
        handleSampleChange,
        handleCustomChange,
    };
}
