/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacityValue(color) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(${color}))`;
    }

    return `hsl(var(${color}) / ${opacityValue})`;
  }
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'menu-text': withOpacityValue('--menu'),
        'main': withOpacityValue('--main'),
        'header': withOpacityValue('--header'),
        'navbar': withOpacityValue('--navbar'),
        'accordion': withOpacityValue('--accordion'),
        'invested-value': withOpacityValue('--invested-value'),
        'footer': withOpacityValue('--footer'),
      },
      screens: {
        'xs': '322px',
        ...defaultTheme.screens,
      },
    },
  },
  daisyui: {
    styled: true,
    themes: [
      {
        'select': {
          ...require("daisyui/src/colors/themes")["[data-theme=lofi]"],
          'primary': '#156C91',
          'primary-focus': '#115775',
          'primary-content': '#ffffff',

          'secondary': '#0D435A',
          'secondary-focus': '#092E3E',
          'secondary-content': '#ffffff',

          'accent': '#282828',
          'accent-focus': '#000000',
          'accent-content': '#ffffff',

          'neutral': '#ffffff',
          'neutral-focus': '#ffffff',
          'neutral-content': '#000000',

          'base-100': '#FFFFFF',
          'base-200': '#F1F5F9',
          'base-300': '#E7E7E7',
          'base-content': '#000000',

          'info': '#24A7E0',
          'success': '#009485',
          'warning': '#EAA500',
          'error': '#A80000',

          '--rounded-box': '0.25rem',
          '--rounded-btn': '0.25rem',
          '--rounded-badge': '0.25rem',

          '--animation-btn': '0.2s',
          '--animation-input': '0.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
      },
    ],
  /*[
    {
      select: {
        ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
        // "primary": "#282828",
        "secondary": "#8699A0",
        "accent": "#092E3E",
        "error": "#ff000f",
      }
    },
  ],*/
},
  plugins: [
    require("daisyui")
  ],
}