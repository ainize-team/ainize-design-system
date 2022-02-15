import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { styled } from "../../stitches.config";
var StyledAvatar = styled(AvatarPrimitive.Root, {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    overflow: "hidden",
    userSelect: "none",
    cursor: "pointer",
    borderRadius: "100%",
});
var AvatarContainer = styled("div", {
    height: "40px",
});
export var Avatar = function (_a) {
    var src = _a.src, width = _a.width, height = _a.height, css = _a.css;
    return (React.createElement(AvatarContainer, null,
        React.createElement(StyledAvatar, { css: css },
            React.createElement("img", { alt: "avatar", src: src, width: width, height: height, referrerPolicy: "no-referrer" }))));
};
