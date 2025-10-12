export type ConsoleTab = 'sample' | 'custom';

export interface ConsoleIOProps {
    sampleValue?: string;
    customValue?: string;
    onSampleChange?: (value: string) => void;
    onCustomChange?: (value: string) => void;
    defaultTab?: ConsoleTab;
    height?: number | string;
    width?: number | string;
    'data-testid'?: string;
}
