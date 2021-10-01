import React from 'react';
import { styled } from '../../stitches.config';
export var StyledButton = styled('button', {
    all: 'unset',
    padding: '12px 20px',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    variants: {
        type: {
            primary: {
                background: '$violet150',
                '&:hover': {
                    background: '$violet200',
                },
            },
            secondary: {
                color: '#4A5057',
                background: '#DFE2E6',
            },
        },
    },
    defaultVariants: {
        type: 'primary',
    },
});
export function Button(_a) {
    var label = _a.label, type = _a.type;
    return React.createElement(StyledButton, { type: type }, label);
}
