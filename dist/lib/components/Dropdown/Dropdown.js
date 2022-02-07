import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { styled } from "../../stitches.config";
export var DropdownMenuRoot = DropdownMenuPrimitive.Root;
export var DropdownMenuTrigger = styled(DropdownMenuPrimitive.Trigger, {
    cursor: "pointer",
});
export var DropdownMenuContent = styled(DropdownMenuPrimitive.Content, {
    backgroundColor: "$white",
    boxShadow: "0 3px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: 4,
    minWidth: 200,
    padding: 4,
    fontFamily: "$roboto",
});
export var DropdownMenuItem = styled(DropdownMenuPrimitive.Item, {
    all: "unset",
    padding: "14px 0",
    paddingLeft: 12,
    display: "flex",
    alignItems: "center",
    gap: 8,
    outline: "unset",
    cursor: "pointer",
    "&:focus": {
        backgroundColor: "$gray10",
    },
});
export var DropdownMenuLabel = styled(DropdownMenuPrimitive.DropdownMenuLabel, {
    padding: 12,
    borderBottom: "1px solid $line",
});
