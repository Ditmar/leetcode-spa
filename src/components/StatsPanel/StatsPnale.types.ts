export interface StatsPanelProps {
    totalTests: number;
    passed: number;
    failed: number;
    waiting: number;
}

export interface StatItemData {
    label: string;
    value: number;
    icon: JSX.Element;
    color: string;
}