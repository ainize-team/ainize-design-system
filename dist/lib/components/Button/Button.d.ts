import React from 'react';
declare type ButtonTypes = 'primary' | 'secondary';
export interface ButtonProps {
    type: ButtonTypes;
    label: string;
}
export declare const StyledButton: import("@stitches/react/types/styled-component").StyledComponent<"button", {
    type?: "primary" | "secondary" | undefined;
}, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        violet150: string;
        violet200: string;
    };
    fontSizes: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
export declare function Button({ label, type }: ButtonProps): React.ReactElement;
export {};
