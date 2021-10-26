/// <reference types="react" />
interface Option {
    label: string;
    value: string;
}
interface SelectProps {
    options: Array<Option>;
    size: 'small' | 'medium';
    width: string;
    isError?: boolean;
    disabled?: boolean;
}
export declare function Select({ options, size, width, isError, disabled }: SelectProps): JSX.Element;
export {};
