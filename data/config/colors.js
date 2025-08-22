import chroma from 'chroma-js';

/* Configure colors at https://shipixen.com/color-theme-explorer-shadcn */
export const colors = {
  primary: {
    lighter: '#B3D1FF',
    light: '#73ABFF',
    main: '#2C80FF',
    dark: '#1F63CC',
    darker: '#184DA3',
  },
  secondary: {
    lighter: '#86efac',
    light: '#4ade80',
    main: '#22c55e',
    dark: '#16a34a',
    darker: '#15803d',
  },
};

export const colorsRgb = {
  primary: {
    lighter: chroma(colors.primary.lighter).rgb().join(', '),
    light: chroma(colors.primary.light).rgb().join(', '),
    main: chroma(colors.primary.main).rgb().join(', '),
    dark: chroma(colors.primary.dark).rgb().join(', '),
    darker: chroma(colors.primary.darker).rgb().join(', '),
  },
  secondary: {
    lighter: chroma(colors.secondary.lighter).rgb().join(', '),
    light: chroma(colors.secondary.light).rgb().join(', '),
    main: chroma(colors.secondary.main).rgb().join(', '),
    dark: chroma(colors.secondary.dark).rgb().join(', '),
    darker: chroma(colors.secondary.darker).rgb().join(', '),
  },
};
