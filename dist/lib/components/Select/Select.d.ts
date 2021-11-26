/// <reference types="react" />
import { ActionMeta, SingleValue } from 'react-select';
interface Option {
    label: string;
    value: string;
}
export interface SelectProps {
    options: Array<Option>;
    size: 'small' | 'medium';
    width: string;
    onChange: (newValue: SingleValue<Option>, actionMeta: ActionMeta<any>) => void;
    isError?: boolean;
    disabled?: boolean;
    defaultValue?: Option;
    [x: string]: any;
}
export declare function Select({ options, size, width, isError, disabled, onChange, defaultValue, ...props }: SelectProps): JSX.Element;
export {};
