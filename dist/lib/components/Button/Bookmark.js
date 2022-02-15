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
import React from "react";
import { Bookmark } from "react-feather";
import { config, styled } from "../../stitches.config";
var StyledButton = styled("button", {
    all: "unset",
    display: "inline-flex",
    gap: 4,
    borderRadius: 4,
    cursor: "pointer",
    fontFamily: "$montserrat",
    fontWeight: 500,
    alignItems: "center",
    boxSizing: "border-box",
    width: "fit-content",
    color: "$text2",
    border: "1px solid $text3",
    transition: "$button",
    "&:hover": {
        color: "$violet150",
        borderColor: "$violet100",
    },
    fontSize: "$p",
    padding: "6px 8px",
    "&:disabled": {
        border: 0,
        cursor: "unset",
    },
    variants: {
        bookmarked: {
            true: {
                color: "$violet150",
            },
            false: {
                color: "$text2",
            },
        },
    },
    defaultVariants: {
        bookmarked: false,
    },
});
export function BookmarkButton(_a) {
    var value = _a.value, bookmarked = _a.bookmarked, disabled = _a.disabled, props = __rest(_a, ["value", "bookmarked", "disabled"]);
    return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    React.createElement(StyledButton, __assign({ bookmarked: bookmarked, disabled: disabled }, props),
        value,
        bookmarked ? (React.createElement(Bookmark, { size: 16, fill: config.theme.colors.violet150 })) : (React.createElement(Bookmark, { size: 16 }))));
}
