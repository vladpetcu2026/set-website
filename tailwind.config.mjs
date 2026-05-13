/** @type {import('tailwindcss').Config} */
import setPreset from './src/brand/tailwind.preset.cjs';

export default {
  presets: [setPreset],
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,mdx}'],
};
