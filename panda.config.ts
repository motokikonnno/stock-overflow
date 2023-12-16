import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,

  include: ['./src/**/*.{ts,tsx,js,jsx}'],

  exclude: [],

  theme: {
    extend: {
      breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1110px',
      },
    },
  },

  outdir: 'styled-system',
});
