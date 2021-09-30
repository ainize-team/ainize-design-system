import React from 'react';

type ButtonTypes = 'primary' | 'secondary';

export interface ButtonProps {
  type: ButtonTypes;
  label: string;
}

export function Button({ label }: ButtonProps): React.ReactElement {
  return <button>{label}</button>;
}
