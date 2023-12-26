/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray1: {
          "100": "#898989",
          "200": "#222",
          "300": "#171717",
          "400": "rgba(7, 7, 7, 0.33)",
          "500": "rgba(255, 255, 255, 0.2)",
        },
        "studio-darkmode-allwhite-ffffff": "#fff",
        aquamarine: "#a3f7bf",
        blueviolet: "#764af1",
        black: "#000",
        gray: "#676f82",
        accent: "#457eff",
        royalblue: "#094db2",
        "light-border": "#e2e4ea",
        "dark-gray": "#334158",
        darkslategray: {
          "100": "#474747",
          "200": "#373737",
        },
        lemonchiffon: "#fffcc1",
        silver: "#c7c7c7",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
        rubik: "Rubik",
        "text-large": "Inter",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "4xl": "23px",
        "2xs": "11px",
        "default-border-raius": "4px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "18px",
      smi: "13px",
      "11xl": "30px",
      "37xl": "56px",
      "25xl": "44px",
      "13xl": "32px",
      sm: "14px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
