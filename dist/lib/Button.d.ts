import React from 'react';
declare type ButtonTypes = 'primary' | 'secondary';
export interface ButtonProps {
    type: ButtonTypes;
    label: string;
}
export declare function Button({ label }: ButtonProps): React.ReactElement;
export {};
