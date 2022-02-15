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
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import ReactSelect from "react-select";
import { config } from "../../stitches.config";
var customStyles = {
    container: function (provided, state) { return (__assign(__assign({}, provided), { width: state.selectProps.width, minHeight: "unset" })); },
    control: function (provided, state) { return (__assign(__assign(__assign(__assign({}, provided), { minHeight: "unset" }), (state.selectProps.size === "small"
        ? {
            padding: "4px 8px",
        }
        : {
            padding: "8px 12px",
        })), { alignItems: "flex-start", gap: "8px", boxShadow: "unset", ":focus-within": {
            border: state.selectProps.isError
                ? "2px solid " + config.theme.colors.red100
                : "2px solid " + config.theme.colors.violet100,
            borderRadius: "4px",
        } })); },
    input: function (provided, state) { return (__assign(__assign(__assign({}, provided), { margin: "unset" }), (state.selectProps.size === "small"
        ? {
            height: "20px",
        }
        : {
            height: "24px",
        }))); },
    option: function (provided, state) { return (__assign(__assign(__assign(__assign({}, provided), { display: "flex", alignItems: "center", fontFamily: "roboto, sans-serif" }), (state.selectProps.size === "small"
        ? {
            fontSize: "0.75rem",
            lineHeight: "16px",
        }
        : {
            fontSize: "1rem",
            lineHeight: "24px",
        })), { 
        // eslint-disable-next-line no-nested-ternary
        backgroundColor: state.isFocused
            ? "hsla(214, 12%, 89%, .8)"
            : state.isSelected
                ? "hsla(214, 12%, 89%, .4)"
                : "white", "&:hover": {
            cursor: "pointer",
            backgroundColor: "hsla(214, 12%, 89%, .8)",
        }, "&:clicked": {
            backgroundColor: "hsla(214, 12%, 89%, .8)",
        }, color: config.theme.colors.text1 })); },
    valueContainer: function (provided, state) { return (__assign(__assign({}, provided), { height: state.selectProps.size === "small" ? "20px" : "24px", padding: "unset" })); },
    singleValue: function (provided, state) { return (__assign(__assign({}, provided), { fontFamily: "roboto, sans-serif", color: config.theme.colors.text1, margin: "unset", fontSize: state.selectProps.size === "small" ? "0.75rem" : "1rem", lineHeight: state.selectProps.size === "small" ? "16px" : "24px" })); },
    dropdownIndicator: function () { return ({
        all: "unset",
        display: "flex",
        alignItems: "flex-start",
        color: "hsl(208, 6%, 54%)",
    }); },
    indicatorsContainer: function () { return ({
        all: "unset",
    }); },
    indicatorSeparator: function () { return ({
        display: "none",
    }); },
};
// export function Select({...props}: StyleSelectProps) {
export function Select(_a) {
    var options = _a.options, size = _a.size, width = _a.width, isError = _a.isError, disabled = _a.disabled, onChange = _a.onChange, defaultValue = _a.defaultValue, props = __rest(_a, ["options", "size", "width", "isError", "disabled", "onChange", "defaultValue"]);
    return (React.createElement(ReactSelect, __assign({ isSearchable: false, styles: customStyles, width: width, isError: isError, isDisabled: disabled, size: size, options: options, defaultValue: defaultValue || options[0], onChange: onChange }, props)));
}
