/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontSize: {
        "display-2xl": [
          "4.5rem",
          {
            lineHeight: "5.625rem",
            letterSpacing: "-0.02rem"
          }
        ],
        "display-xl": [
          "3.75rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: "-0.02rem"
          }
        ],
        "display-lg": [
          "3rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-0.02rem"
          }
        ],
        "display-md": [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-0.02rem"
          }
        ],
        "display-sm": [
          "1.875rem",
          {
            lineHeight: "2.375rem"
          }
        ],
        "display-xs": [
          "1.5rem",
          {
            lineHeight: "2rem"
          }
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.875rem"
          }
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.75rem"
          }
        ],
        md: [
          "1rem",
          {
            lineHeight: "1.5rem"
          }
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.25rem"
          }
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1.125rem"
          }
        ]
      },
      colors: {
        primary: "#5D55F2",
        secondary: "#41347A",
        accent: "#FFB5F1",
        gray: {
          DEFAULT: "#667085",
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828"
        },
        error: {
          DEFAULT: "#F04438",
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A"
        },
        warning: {
          DEFAULT: "#F79009",
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E"
        },
        success: {
          DEFAULT: "#12B76A",
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          200: "#A6F4C5",
          300: "#6CE9A6",
          400: "#32D583",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
          800: "#05603A",
          900: "#054F31"
        }
      }
    }
  },
  plugins: []
};
