/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      primary: {
        100: '#C1905E',
        200: '#CAA176',
        300: '#D7B796',
        400: '#E3CDB7',
        500: '#ECDECF',
      },
      secondary: {
        100: '#F0C88C',
        200: '#F1CD97',
        300: '#F3D3A3',
        400: '#F5D9AF',
        500: '#F7E3C5',
      },
      typography: {
        100: '#FFFFFF',
        200: '#E5E5E5',
        300: '#B2B2B2',
        400: '#808080',
        500: '#595959',
      },
      success: {
        100: '#6DC06E',
        200: '#85D186',
        300: '#8FD890',
        400: '#B1F2B1',
        500: '#DCF9DC',
      },
      error: {
        100: '#C75454',
        200: '#D47979',
        300: '#D98888',
        400: '#ECA2A2',
        500: '#F4CCCC',
      },
      warning: {
        100: '#F6D523',
        200: '#FBE154',
        300: '#FDE668',
        400: '#FDEFA6',
        500: '#FEF8D6',
      },
      background: {
        100: '#333333',
        200: '#222222',
      },
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}