import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { styled } from "../../stitches.config";
var StyledSwitch = styled(SwitchPrimitive.Root, {
    all: "unset",
    cursor: "pointer",
    width: 36,
    height: 20,
    backgroundColor: "$gray40",
    borderRadius: "9999px",
    position: "relative",
    '&[data-state="checked"]': { backgroundColor: "$violet150" },
});
var StyledThumb = styled(SwitchPrimitive.Thumb, {
    display: "block",
    width: 16,
    height: 16,
    backgroundColor: "$white",
    borderRadius: "9999px",
    transition: "transform 100ms",
    transform: "translateX(2px)",
    willChange: "transform",
    '&[data-state="checked"]': { transform: "translateX(18px)" },
});
export var Switch = function (_a) {
    var checked = _a.checked, onChecked = _a.onChecked, disabled = _a.disabled;
    return (React.createElement(StyledSwitch, { checked: checked, onCheckedChange: onChecked, disabled: disabled },
        React.createElement(StyledThumb, null)));
};
