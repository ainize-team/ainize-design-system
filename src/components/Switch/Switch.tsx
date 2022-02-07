import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { styled } from "../../stitches.config";

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: "unset",
  cursor: "pointer",
  width: 36,
  height: 20,
  backgroundColor: "$gray40",
  borderRadius: "9999px",
  position: "relative",
  '&[data-state="checked"]': { backgroundColor: "$violet150" },
});
const StyledThumb = styled(SwitchPrimitive.Thumb, {
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

export interface SwitchProps {
  checked?: boolean;
  onChecked?: (checked: boolean) => void;
  disabled?: boolean;
}

export const Switch = ({ checked, onChecked, disabled }: SwitchProps) => {
  return (
    <StyledSwitch
      checked={checked}
      onCheckedChange={onChecked}
      disabled={disabled}
    >
      <StyledThumb />
    </StyledSwitch>
  );
};
