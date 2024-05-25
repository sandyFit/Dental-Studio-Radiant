/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        midnight: '#07224A',
        navyBlue: '#2d3e5e',
        spaceCadet: '#1D345D', // Petroleum blue
        customGrey: '#2B2F32',
        azure: '#0084FF', // vibrant blue
        spanishBlue: '#53B4DE', // jade blue
        oceanBlue: '#DCEAFF',
        greyBlue: '#7AACFA',
        whiteBlue: '#E3EDFC', // white blueish
        fairBlue: '#CDDFFA',
        lightBlue: '#6B8ECD', // light blue
        niceBlue: '#F0F6FF',
        white: '#F2F2F2',
        white2: '#F2F6FC',
        white3: '#E3EDFC',
        transparent: 'transparent',
        gold: '#F5E105',
        tan: '#F2DABB',
        bronze: '#cca674',
        sand: '#A89269',
        moon: '#2D3F59'
  
      },
  
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        bai: ['Bai Jamjuree' , 'sans-serif'],
        cursive: ['WindSong', 'cursive'],
        anybody: ['Anybody', 'sans-serif'],
        inter: ["Inter", 'sans-serif']
      },

      backgroundImage: {
        'custom-gradient-bg-left': 'radial-gradient(at bottom left, #111f3b 0%, #2d3e5e 71%);',
        'custom-gradient-bg-right': 'radial-gradient(at bottom right, #111f3b 0%, #2d3e5e 71%);',
        'custom-gradient-bg-inverse-left': 'radial-gradient(at top left, #111f3b 0%, #2d3e5e 71%);',
        'custom-gradient-bg-inverse-right': 'radial-gradient(at top right, #111f3b 0%, #2d3e5e 71%);',
        'custom-gradient-bg-cards': 'linear-gradient(135deg, rgba(6,147,227,1) 0%, rgb(155,81,224) 100%);',
        'grey-cards': '#2B2F32',
        'custom-gradient-btn': 'linear-gradient(135deg, rgba(6,147,227,1) 0%, rgb(155,81,224) 100%)',
        
        'vivid-cyan-blue-to-vivid-purple': 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);',
        'light-green-cyan-to-vivid-green-cyan': 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);',
        'luminous-vivid-amber-to-luminous-vivid-orange': 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);',
        'luminous-vivid-orange-to-vivid-red': 'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);',
        'very-light-gray-to-cyan-bluish-gray': 'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);',
        'cool-to-warm-spectrum': 'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);',
        'blush-light-purple': 'linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);',
        'blush-bordeaux': 'linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);',
        'luminous-dusk': 'linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);',
        'pale-ocean': 'linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);',
        'electric-grass': 'linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);',
        'midnight': 'linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);',

      },

      animation: {
        'shine-infinite': 'shine-infinite 8s linear infinite',
      },
      keyframes: {
        'shine-infinite': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' },
        },
      },
      
    },
    plugins: [],
  }

}



