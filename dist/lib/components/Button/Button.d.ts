import React from 'react';
declare const StyledButton: import("@stitches/react/types/styled-component").StyledComponent<"button", {
    type?: "primary" | "secondary" | "outlined" | undefined;
    disabled?: boolean | "true" | undefined;
    size?: "medium" | "small" | "large" | undefined;
}, {
    bp1: "(min-width: 840px)";
}, import("@stitches/react/types/css-util").CSS<{
    bp1: "(min-width: 840px)";
}, {
    colors: {
        text1: string;
        text2: string;
        text3: string;
        line: string;
        background: string;
        white: string;
        violet300: string;
        violet200: string;
        violet150: string;
        violet100: string;
        violet30: string;
        violet10: string;
        'comcom-violet300': string;
        'comcom-violet200': string;
        'comcom-violet150': string;
        'comcom-violet100': string;
        'comcom-violet30': string;
        'comcom-violet10': string;
        green300: string;
        green200: string;
        green150: string;
        green100: string;
        green30: string;
        green10: string;
        skyblue300: string;
        skyblue200: string;
        skyblue150: string;
        skyblue100: string;
        skyblue30: string;
        skyblue10: string;
        orange300: string;
        orange200: string;
        orange150: string;
        orange100: string;
        orange30: string;
        orange10: string;
        red300: string;
        red200: string;
        red150: string;
        red100: string;
        red30: string;
        red10: string;
        leafgreen300: string;
        leafgreen200: string;
        leafgreen150: string;
        leafgreen100: string;
        leafgreen30: string;
        leafgreen10: string;
        yellow300: string;
        yellow200: string;
        yellow150: string;
        yellow100: string;
        yellow30: string;
        yellow10: string;
        gray5: string;
        gray10: string;
        gray20: string;
        gray30: string;
        'gray30-a4': string;
        'gray30-a8': string;
        gray40: string;
        gray50: string;
        gray80: string;
        gray100: string;
        gray200: string;
        gray250: string;
        gray300: string;
    };
    fonts: {
        montserrat: string;
        roboto: string;
    };
    fontSizes: {
        label: string;
        p: string;
        basic: string;
        h4: string;
        h3: string;
        h2: string;
        h1: string;
        jumbo: string;
    };
    fontWeights: {
        regular: number;
        medium: number;
        bold: number;
    };
    transitions: {
        button: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
declare type StyleButtonProps = React.ComponentProps<typeof StyledButton>;
export declare type ButtonProps = StyleButtonProps & {
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
    disabled?: boolean;
};
export declare function Button({ startIcon, endIcon, children, ...props }: ButtonProps): JSX.Element;
export {};
