var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { styled } from '../../stitches.config';
var StyledButton = styled('button', {
    all: 'unset',
    display: 'inline-flex',
    gap: 8,
    color: '$white',
    borderRadius: 4,
    cursor: 'pointer',
    fontFamily: '$roboto',
    fontWeight: 500,
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    variants: {
        type: {
            primary: {
                background: '$violet150',
                '&:hover': {
                    background: '$violet200',
                },
            },
            secondary: {
                color: '$text2',
                background: '$gray30-a4',
                '&:hover': {
                    color: '$text1',
                    background: '$gray30-a8',
                },
            },
            outlined: {
                color: '$text2',
                border: '1px solid $gray50',
                '&:hover': {
                    color: '$violet150',
                    borderColor: '$violet100',
                },
                '&:disabled,[disabled]': {
                    borderColor: '$gray50',
                    color: '$text2',
                },
            },
        },
        disabled: {
            true: {
                cursor: 'not-allowed',
                opacity: 0.3,
            },
        },
        size: {
            large: {
                fontSize: '$2',
                lineHeight: '24px',
                padding: '12px 20px',
            },
            medium: {
                fontSize: '$1',
                lineHeight: '24px',
                padding: '8px 12px',
            },
            small: {
                fontSize: '$0',
                lineHeight: '16px',
                padding: '6px 8px',
            },
        },
    },
    defaultVariants: {
        type: 'primary',
        size: 'large',
        disabled: false,
    },
});
export function Button(_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledButton, __assign({}, props),
        startIcon,
        children,
        endIcon));
}
