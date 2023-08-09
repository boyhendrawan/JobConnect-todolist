/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "mainFont":["Montserrat"]
      },
      colors:{
        "main":"#eebbc3",
        "heading":"#232946",
        "pragraf":"#b8c1ec",
        "btn":"#67568c",
        "highlight":"#ff6e6c",
        "card":"#463366",
        "paragraf":"#c9bae2"
      },

      animation: {
        change: 'wiggle 350ms ease-in-out ',
        "custom-slow-rotate":"rotate 30s 1 forwards"
      },
      keyframes: {
        wiggle: {
          '0%':{transform:'scale(1)'},
          '50%': { transform: 'scale(0)' },
          '100%': { display:"hidden" },
        },
        fadeUp:{
          '0%': { transform: 'translateY(-100px) scale(0)',
                },
          '100%':{transform:'translateY(0px) scale(1)'}
        },
        rotate:{
          "0%": {rotate:'0deg',
                scale:"0",
                origin: "center",
              },
          "50%":{scale:"3 1.5", origin: "center",},
          "100%":{rotate:"360deg",
                scale:"6 1.5",
                origin: "center",      
        }
        }
      },

    },
  },
  plugins: [],
}

