import { styled } from '../../stitches.config';
export var Text = styled('span', {
    variants: {
        size: {
            jumbo: {
                fontSize: '$jumbo',
                lineHeight: '64px',
            },
            h1: {
                fontSize: '$h1',
                lineHeight: '40px',
            },
            h2: {
                fontSize: '$h2',
                lineHeight: '32px',
            },
            h3: {
                fontSize: '$h3',
                lineHeight: '28px',
            },
            h4: {
                fontSize: '$h4',
                lineHeight: '20px',
            },
            basic: {
                fontSize: '$basic',
                lineHeight: '24px',
            },
            p: {
                fontSize: '$p',
                lineHeight: '20px',
            },
            label: {
                fontSize: '$label',
                lineHeight: '16px',
            },
        },
        weight: {
            bold: {
                fontWeight: '$bold',
            },
            medium: {
                fontWeight: '$medium',
            },
            regular: {
                fontWeight: '$regular',
            },
        },
        color: {
            1: {
                color: '$text1',
            },
            2: {
                color: '$text2',
            },
            3: {
                color: '$text3',
            },
        },
    },
    defaultVariants: {
        size: 'basic',
        weight: 'regular',
    },
});
export default Text;
