/// <reference types="react" />
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
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
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    fontWeights: {
        regular: number;
        medium: number;
        bold: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>(type: Type, ...composers: { [K in keyof Composers]: Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
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
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    fontWeights: {
        regular: number;
        medium: number;
        bold: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
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
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    fontWeights: {
        regular: number;
        medium: number;
        bold: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>(...composers: { [K in keyof Composers]: Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{}, {
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
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        fontWeights: {
            regular: number;
            medium: number;
            bold: number;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {}>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{}, {
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
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    fontWeights: {
        regular: number;
        medium: number;
        bold: number;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{}, {
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
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        fontWeights: {
            regular: number;
            medium: number;
            bold: number;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {}>;
}) => {
    (): string;
    name: string;
}, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        text1: import("@stitches/react/types/theme").Token<"text1", string, "colors", "">;
        text2: import("@stitches/react/types/theme").Token<"text2", string, "colors", "">;
        text3: import("@stitches/react/types/theme").Token<"text3", string, "colors", "">;
        line: import("@stitches/react/types/theme").Token<"line", string, "colors", "">;
        background: import("@stitches/react/types/theme").Token<"background", string, "colors", "">;
        white: import("@stitches/react/types/theme").Token<"white", string, "colors", "">;
        violet300: import("@stitches/react/types/theme").Token<"violet300", string, "colors", "">;
        violet200: import("@stitches/react/types/theme").Token<"violet200", string, "colors", "">;
        violet150: import("@stitches/react/types/theme").Token<"violet150", string, "colors", "">;
        violet100: import("@stitches/react/types/theme").Token<"violet100", string, "colors", "">;
        violet30: import("@stitches/react/types/theme").Token<"violet30", string, "colors", "">;
        violet10: import("@stitches/react/types/theme").Token<"violet10", string, "colors", "">;
        'comcom-violet300': import("@stitches/react/types/theme").Token<"comcom-violet300", string, "colors", "">;
        'comcom-violet200': import("@stitches/react/types/theme").Token<"comcom-violet200", string, "colors", "">;
        'comcom-violet150': import("@stitches/react/types/theme").Token<"comcom-violet150", string, "colors", "">;
        'comcom-violet100': import("@stitches/react/types/theme").Token<"comcom-violet100", string, "colors", "">;
        'comcom-violet30': import("@stitches/react/types/theme").Token<"comcom-violet30", string, "colors", "">;
        'comcom-violet10': import("@stitches/react/types/theme").Token<"comcom-violet10", string, "colors", "">;
        green300: import("@stitches/react/types/theme").Token<"green300", string, "colors", "">;
        green200: import("@stitches/react/types/theme").Token<"green200", string, "colors", "">;
        green150: import("@stitches/react/types/theme").Token<"green150", string, "colors", "">;
        green100: import("@stitches/react/types/theme").Token<"green100", string, "colors", "">;
        green30: import("@stitches/react/types/theme").Token<"green30", string, "colors", "">;
        green10: import("@stitches/react/types/theme").Token<"green10", string, "colors", "">;
        skyblue300: import("@stitches/react/types/theme").Token<"skyblue300", string, "colors", "">;
        skyblue200: import("@stitches/react/types/theme").Token<"skyblue200", string, "colors", "">;
        skyblue150: import("@stitches/react/types/theme").Token<"skyblue150", string, "colors", "">;
        skyblue100: import("@stitches/react/types/theme").Token<"skyblue100", string, "colors", "">;
        skyblue30: import("@stitches/react/types/theme").Token<"skyblue30", string, "colors", "">;
        skyblue10: import("@stitches/react/types/theme").Token<"skyblue10", string, "colors", "">;
        orange300: import("@stitches/react/types/theme").Token<"orange300", string, "colors", "">;
        orange200: import("@stitches/react/types/theme").Token<"orange200", string, "colors", "">;
        orange150: import("@stitches/react/types/theme").Token<"orange150", string, "colors", "">;
        orange100: import("@stitches/react/types/theme").Token<"orange100", string, "colors", "">;
        orange30: import("@stitches/react/types/theme").Token<"orange30", string, "colors", "">;
        orange10: import("@stitches/react/types/theme").Token<"orange10", string, "colors", "">;
        red300: import("@stitches/react/types/theme").Token<"red300", string, "colors", "">;
        red200: import("@stitches/react/types/theme").Token<"red200", string, "colors", "">;
        red150: import("@stitches/react/types/theme").Token<"red150", string, "colors", "">;
        red100: import("@stitches/react/types/theme").Token<"red100", string, "colors", "">;
        red30: import("@stitches/react/types/theme").Token<"red30", string, "colors", "">;
        red10: import("@stitches/react/types/theme").Token<"red10", string, "colors", "">;
        leafgreen300: import("@stitches/react/types/theme").Token<"leafgreen300", string, "colors", "">;
        leafgreen200: import("@stitches/react/types/theme").Token<"leafgreen200", string, "colors", "">;
        leafgreen150: import("@stitches/react/types/theme").Token<"leafgreen150", string, "colors", "">;
        leafgreen100: import("@stitches/react/types/theme").Token<"leafgreen100", string, "colors", "">;
        leafgreen30: import("@stitches/react/types/theme").Token<"leafgreen30", string, "colors", "">;
        leafgreen10: import("@stitches/react/types/theme").Token<"leafgreen10", string, "colors", "">;
        yellow300: import("@stitches/react/types/theme").Token<"yellow300", string, "colors", "">;
        yellow200: import("@stitches/react/types/theme").Token<"yellow200", string, "colors", "">;
        yellow150: import("@stitches/react/types/theme").Token<"yellow150", string, "colors", "">;
        yellow100: import("@stitches/react/types/theme").Token<"yellow100", string, "colors", "">;
        yellow30: import("@stitches/react/types/theme").Token<"yellow30", string, "colors", "">;
        yellow10: import("@stitches/react/types/theme").Token<"yellow10", string, "colors", "">;
        gray5: import("@stitches/react/types/theme").Token<"gray5", string, "colors", "">;
        gray10: import("@stitches/react/types/theme").Token<"gray10", string, "colors", "">;
        gray20: import("@stitches/react/types/theme").Token<"gray20", string, "colors", "">;
        gray30: import("@stitches/react/types/theme").Token<"gray30", string, "colors", "">;
        'gray30-a4': import("@stitches/react/types/theme").Token<"gray30-a4", string, "colors", "">;
        'gray30-a8': import("@stitches/react/types/theme").Token<"gray30-a8", string, "colors", "">;
        gray40: import("@stitches/react/types/theme").Token<"gray40", string, "colors", "">;
        gray50: import("@stitches/react/types/theme").Token<"gray50", string, "colors", "">;
        gray80: import("@stitches/react/types/theme").Token<"gray80", string, "colors", "">;
        gray100: import("@stitches/react/types/theme").Token<"gray100", string, "colors", "">;
        gray200: import("@stitches/react/types/theme").Token<"gray200", string, "colors", "">;
        gray250: import("@stitches/react/types/theme").Token<"gray250", string, "colors", "">;
        gray300: import("@stitches/react/types/theme").Token<"gray300", string, "colors", "">;
    };
    fonts: {
        montserrat: import("@stitches/react/types/theme").Token<"montserrat", string, "fonts", "">;
        roboto: import("@stitches/react/types/theme").Token<"roboto", string, "fonts", "">;
    };
    fontSizes: {
        0: import("@stitches/react/types/theme").Token<"0", string, "fontSizes", "">;
        1: import("@stitches/react/types/theme").Token<"1", string, "fontSizes", "">;
        2: import("@stitches/react/types/theme").Token<"2", string, "fontSizes", "">;
        3: import("@stitches/react/types/theme").Token<"3", string, "fontSizes", "">;
        4: import("@stitches/react/types/theme").Token<"4", string, "fontSizes", "">;
        5: import("@stitches/react/types/theme").Token<"5", string, "fontSizes", "">;
        6: import("@stitches/react/types/theme").Token<"6", string, "fontSizes", "">;
    };
    fontWeights: {
        regular: import("@stitches/react/types/theme").Token<"regular", string, "fontWeights", "">;
        medium: import("@stitches/react/types/theme").Token<"medium", string, "fontWeights", "">;
        bold: import("@stitches/react/types/theme").Token<"bold", string, "fontWeights", "">;
    };
}, createTheme: <Argument0 extends string | ({
    colors?: {
        text1?: string | number | boolean | undefined;
        text2?: string | number | boolean | undefined;
        text3?: string | number | boolean | undefined;
        line?: string | number | boolean | undefined;
        background?: string | number | boolean | undefined;
        white?: string | number | boolean | undefined;
        violet300?: string | number | boolean | undefined;
        violet200?: string | number | boolean | undefined;
        violet150?: string | number | boolean | undefined;
        violet100?: string | number | boolean | undefined;
        violet30?: string | number | boolean | undefined;
        violet10?: string | number | boolean | undefined;
        'comcom-violet300'?: string | number | boolean | undefined;
        'comcom-violet200'?: string | number | boolean | undefined;
        'comcom-violet150'?: string | number | boolean | undefined;
        'comcom-violet100'?: string | number | boolean | undefined;
        'comcom-violet30'?: string | number | boolean | undefined;
        'comcom-violet10'?: string | number | boolean | undefined;
        green300?: string | number | boolean | undefined;
        green200?: string | number | boolean | undefined;
        green150?: string | number | boolean | undefined;
        green100?: string | number | boolean | undefined;
        green30?: string | number | boolean | undefined;
        green10?: string | number | boolean | undefined;
        skyblue300?: string | number | boolean | undefined;
        skyblue200?: string | number | boolean | undefined;
        skyblue150?: string | number | boolean | undefined;
        skyblue100?: string | number | boolean | undefined;
        skyblue30?: string | number | boolean | undefined;
        skyblue10?: string | number | boolean | undefined;
        orange300?: string | number | boolean | undefined;
        orange200?: string | number | boolean | undefined;
        orange150?: string | number | boolean | undefined;
        orange100?: string | number | boolean | undefined;
        orange30?: string | number | boolean | undefined;
        orange10?: string | number | boolean | undefined;
        red300?: string | number | boolean | undefined;
        red200?: string | number | boolean | undefined;
        red150?: string | number | boolean | undefined;
        red100?: string | number | boolean | undefined;
        red30?: string | number | boolean | undefined;
        red10?: string | number | boolean | undefined;
        leafgreen300?: string | number | boolean | undefined;
        leafgreen200?: string | number | boolean | undefined;
        leafgreen150?: string | number | boolean | undefined;
        leafgreen100?: string | number | boolean | undefined;
        leafgreen30?: string | number | boolean | undefined;
        leafgreen10?: string | number | boolean | undefined;
        yellow300?: string | number | boolean | undefined;
        yellow200?: string | number | boolean | undefined;
        yellow150?: string | number | boolean | undefined;
        yellow100?: string | number | boolean | undefined;
        yellow30?: string | number | boolean | undefined;
        yellow10?: string | number | boolean | undefined;
        gray5?: string | number | boolean | undefined;
        gray10?: string | number | boolean | undefined;
        gray20?: string | number | boolean | undefined;
        gray30?: string | number | boolean | undefined;
        'gray30-a4'?: string | number | boolean | undefined;
        'gray30-a8'?: string | number | boolean | undefined;
        gray40?: string | number | boolean | undefined;
        gray50?: string | number | boolean | undefined;
        gray80?: string | number | boolean | undefined;
        gray100?: string | number | boolean | undefined;
        gray200?: string | number | boolean | undefined;
        gray250?: string | number | boolean | undefined;
        gray300?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        montserrat?: string | number | boolean | undefined;
        roboto?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        0?: string | number | boolean | undefined;
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        regular?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        text1?: string | number | boolean | undefined;
        text2?: string | number | boolean | undefined;
        text3?: string | number | boolean | undefined;
        line?: string | number | boolean | undefined;
        background?: string | number | boolean | undefined;
        white?: string | number | boolean | undefined;
        violet300?: string | number | boolean | undefined;
        violet200?: string | number | boolean | undefined;
        violet150?: string | number | boolean | undefined;
        violet100?: string | number | boolean | undefined;
        violet30?: string | number | boolean | undefined;
        violet10?: string | number | boolean | undefined;
        'comcom-violet300'?: string | number | boolean | undefined;
        'comcom-violet200'?: string | number | boolean | undefined;
        'comcom-violet150'?: string | number | boolean | undefined;
        'comcom-violet100'?: string | number | boolean | undefined;
        'comcom-violet30'?: string | number | boolean | undefined;
        'comcom-violet10'?: string | number | boolean | undefined;
        green300?: string | number | boolean | undefined;
        green200?: string | number | boolean | undefined;
        green150?: string | number | boolean | undefined;
        green100?: string | number | boolean | undefined;
        green30?: string | number | boolean | undefined;
        green10?: string | number | boolean | undefined;
        skyblue300?: string | number | boolean | undefined;
        skyblue200?: string | number | boolean | undefined;
        skyblue150?: string | number | boolean | undefined;
        skyblue100?: string | number | boolean | undefined;
        skyblue30?: string | number | boolean | undefined;
        skyblue10?: string | number | boolean | undefined;
        orange300?: string | number | boolean | undefined;
        orange200?: string | number | boolean | undefined;
        orange150?: string | number | boolean | undefined;
        orange100?: string | number | boolean | undefined;
        orange30?: string | number | boolean | undefined;
        orange10?: string | number | boolean | undefined;
        red300?: string | number | boolean | undefined;
        red200?: string | number | boolean | undefined;
        red150?: string | number | boolean | undefined;
        red100?: string | number | boolean | undefined;
        red30?: string | number | boolean | undefined;
        red10?: string | number | boolean | undefined;
        leafgreen300?: string | number | boolean | undefined;
        leafgreen200?: string | number | boolean | undefined;
        leafgreen150?: string | number | boolean | undefined;
        leafgreen100?: string | number | boolean | undefined;
        leafgreen30?: string | number | boolean | undefined;
        leafgreen10?: string | number | boolean | undefined;
        yellow300?: string | number | boolean | undefined;
        yellow200?: string | number | boolean | undefined;
        yellow150?: string | number | boolean | undefined;
        yellow100?: string | number | boolean | undefined;
        yellow30?: string | number | boolean | undefined;
        yellow10?: string | number | boolean | undefined;
        gray5?: string | number | boolean | undefined;
        gray10?: string | number | boolean | undefined;
        gray20?: string | number | boolean | undefined;
        gray30?: string | number | boolean | undefined;
        'gray30-a4'?: string | number | boolean | undefined;
        'gray30-a8'?: string | number | boolean | undefined;
        gray40?: string | number | boolean | undefined;
        gray50?: string | number | boolean | undefined;
        gray80?: string | number | boolean | undefined;
        gray100?: string | number | boolean | undefined;
        gray200?: string | number | boolean | undefined;
        gray250?: string | number | boolean | undefined;
        gray300?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        montserrat?: string | number | boolean | undefined;
        roboto?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        0?: string | number | boolean | undefined;
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        regular?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, ""> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, "">), config: {
    prefix: "";
    media: {};
    theme: {
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
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        fontWeights: {
            regular: number;
            medium: number;
            bold: number;
        };
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {};
};
