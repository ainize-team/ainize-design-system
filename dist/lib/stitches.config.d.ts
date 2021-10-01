/// <reference types="react" />
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
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
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
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
    }, import("@stitches/react/types/config").DefaultThemeMap, {}>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{}, {
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
}, import("@stitches/react/types/config").DefaultThemeMap, {}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{}, {
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
    }, import("@stitches/react/types/config").DefaultThemeMap, {}>;
}) => {
    (): string;
    name: string;
}, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        violet150: import("@stitches/react/types/theme").Token<"violet150", string, "colors", "">;
        violet200: import("@stitches/react/types/theme").Token<"violet200", string, "colors", "">;
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
}, createTheme: <Argument0 extends string | ({
    colors?: {
        violet150?: string | number | boolean | undefined;
        violet200?: string | number | boolean | undefined;
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
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        violet150?: string | number | boolean | undefined;
        violet200?: string | number | boolean | undefined;
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
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {};
};
