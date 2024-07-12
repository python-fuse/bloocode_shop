import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary":"#8ECAE6",
        "secondary":"#219EBC",
        "link":"#023047",
        "extra":"#FFB703",
        "gold":"#FB8500"
      },
      transitionProperty: {
        'transform': 'transform',
      },
      transformOrigin: {
        '0': '0%',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  variants: {
    extend: {
      transform: ['group-hover'],
      rotate: ['group-hover'],
    },
  },

  
  
  plugins: [],
};
export default config;
