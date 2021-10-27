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
var Tag = styled('div', {
    all: 'unset',
    display: 'inline-flex',
    gap: '4px',
    borderRadius: '6px',
    cursor: 'normal',
    fontFamily: '$roboto',
    fontWeight: '$regular',
    alignItems: 'center',
    variants: {
        size: {
            medium: {
                padding: '2px 8px',
            },
            small: {
                padding: '0px 4px',
            },
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});
var StyledPrimaryTag = styled(Tag, {
    border: 'none',
    variants: {
        color: {
            violet: {
                backgroundColor: '$violet10',
                color: '$violet200',
            },
            gray: {
                backgroundColor: '$gray10',
                color: '$text2',
            },
        },
    },
    defaultVariants: {
        color: 'violet',
    },
});
export function PrimaryTag(_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledPrimaryTag, __assign({}, props),
        startIcon,
        children,
        endIcon));
}
var StyledOutlinedTag = styled(Tag, {
    border: '1px solid',
    backgroundColor: '$white',
    variants: {
        color: {
            violet: {
                borderColor: '$violet100',
                color: '$violet100',
            },
            gray: {
                borderColor: '$gray100',
                color: '$gray100',
            },
        },
    },
    defaultVariants: {
        color: 'violet',
    },
});
export function OutlinedTag(_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledOutlinedTag, __assign({}, props),
        startIcon,
        children,
        endIcon));
}
