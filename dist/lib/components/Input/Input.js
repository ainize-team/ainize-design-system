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
var StyledInput = styled('input', {
    fontFamily: '$roboto',
    outline: 'none',
    boxSizing: 'border-box',
    borderRadius: 4,
    border: '2px solid $line',
    color: '$text1',
    width: '100%',
    '&:focus': {
        border: '2px solid $violet100',
    },
    '&:hover': {
        border: '2px solid $violet150',
    },
    '&:disabled': {
        border: '2px solid $line',
        color: '$text3',
    },
    variants: {
        danger: {
            true: {
                border: '2px solid $red100',
                '&:hover': {
                    border: '2px solid $red150',
                },
                '&:focus': {
                    border: '2px solid $red100',
                },
            },
        },
        size: {
            medium: {
                padding: '8px 12px',
                fontSize: '$2',
                lineHeight: 1.5,
            },
            small: {
                padding: '6px 8px',
                fontSize: '$0',
                lineHeight: '16px',
            },
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});
export var Input = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    // eslint-disable-next-line react/jsx-props-no-spreading
    return React.createElement(StyledInput, __assign({}, props, { size: size }));
};
export default Input;
