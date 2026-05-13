// tailwind.config.js — preset SET
// Importa in tailwind.config al proiectului tau:
//
//   const setPreset = require('./brand/tailwind.preset.js');
//   module.exports = {
//     presets: [setPreset],
//     content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
//   };

module.exports = {
  theme: {
    extend: {
      colors: {
        set: {
          black: '#0b0b0b',
          white: '#ffffff',
          yellow: '#f0db4f',
          cobalt: '#1d4ed8',
          vermilion: '#e8412a',
          lime: '#84cc16',
          bone: '#f4f1ea',
          ash: '#1a1a1a',
          dim: '#7a7a7a',
        },
        // semantic — preferate in componente
        brand:   '#f0db4f',
        primary: '#1d4ed8',
        danger:  '#e8412a',
        success: '#84cc16',
      },
      fontFamily: {
        mono: ['"Spline Sans Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
        sans: ['"Spline Sans Mono"', 'ui-monospace', 'monospace'],   // o singura familie
      },
      fontSize: {
        // override scale to match identity
        'display-xl': ['156px', { lineHeight: '0.92', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-lg': ['116px', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-md': ['88px',  { lineHeight: '0.98', letterSpacing: '-0.03em', fontWeight: '600' }],
        'headline':   ['56px',  { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'subhead':    ['36px',  { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '500' }],
        'lead':       ['28px',  { lineHeight: '1.4' }],
      },
      letterSpacing: {
        caps: '0.12em',
      },
      borderRadius: {
        // Brut: aproape niciodata radius. Lasam doar 2px max.
        none: '0',
        sm: '2px',
      },
      borderWidth: {
        DEFAULT: '1.5px',
        2: '2px',
      },
    },
  },
  plugins: [],
};
