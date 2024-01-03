/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
    ],
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        
        },
      },
      extend: {
        colors: {
          'primary-500': 'rgb(29 78 216)',
          'primary-600': 'rgb(30 64 175)',
          'secondary-500': '#FFB620',
          'off-white': '#D0DFFF',
          'red': '#b82c2c',
          'red-600': '#911c1c',
          'dark-1': '#000000',
          'dark-2': '#09090A',
          'dark-3': '#101012',
          'dark-4': '#1F1F22',
          'light-1': '#FFFFFF',
          'light-2': '#EFEFEF',
          'light-3': '#7878A3',
          'light-4': '#5C5C7B',
        },
        screens: {
          'xs': '480px',
        
        },
        width: {
          '420': '420px',
          '465': '465px',
        },
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
  
        },
        keyframes: {
          'accordion-down': {
            from: { height: 0 },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: 0 },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
        backgroundImage: {
          'image-01': "url('./src/assets/image1.jpeg')",
          'image-02': "url('/src/assets/image2.png')",
        }
      },
    },
    plugins: [import('tailwindcss-animate')],
  }