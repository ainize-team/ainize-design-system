import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { styled } from "../../stitches.config";

export const DropdownMenuRoot = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = styled(DropdownMenuPrimitive.Trigger, {
  cursor: "pointer",
});
export const DropdownMenuContent = styled(DropdownMenuPrimitive.Content, {
  backgroundColor: "$white",
  boxShadow: "0 3px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: 4,
  minWidth: 200,
  padding: 4,
  fontFamily: "$roboto",
});

export const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, {
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

export const DropdownMenuLabel = styled(
  DropdownMenuPrimitive.DropdownMenuLabel,
  {
    padding: 12,
    borderBottom: "1px solid $line",
  },
);
