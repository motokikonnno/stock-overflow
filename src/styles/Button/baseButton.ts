import { cva } from '@styled-system/css';

export const baseButton = cva({
  base: {
    color: 'white',
    backgroundColor: '#F28238',
    fontWeight: 'bold',
    borderRadius: '7px',
    cursor: 'pointer',
  },
  variants: {
    type: {
      wide: {
        width: '100%',
        dropShadow: '(0px 0px 7px rgba(0, 0, 0, 0.25))',
        fontSize: '14.5px',
      },
      base: {
        padding: '6px 9px',
        fontSize: '14.5px',
      },
      small: {
        padding: '10px 24px',
        dropShadow: '(0px 4px 4px rgba(0, 0, 0, 0.25))',
        fontSize: '16px',
      },
    },
  },
  defaultVariants: {
    type: 'base',
  },
});
