/// <reference types="react" />
export interface SwitchProps {
    checked?: boolean;
    onChecked?: (checked: boolean) => void;
    disabled?: boolean;
}
export declare const Switch: ({ checked, onChecked, disabled }: SwitchProps) => JSX.Element;
