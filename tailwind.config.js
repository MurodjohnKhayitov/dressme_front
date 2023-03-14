/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#fafafa',
        textColor: '#707070',
        btnBgColor: '#fcfcfc',
        catalogBg: '#F2F2FD',
        fullBlue: '#007DCA',
        searchBgColor: '#F2F2F2',
        borderColor: '#707070',
        borderColor2: '#e2e2e2',
        borderColorCard: "#c1c1c1",
        "bgCard": "rgba(255, 255, 255, 0.4)",
        // season-----
        borderSpring: "#008F0E",
        "bgSpring": "rgba(0, 143, 14, 0.1)",
        borderSummer: "#FBC02D",
        "bgSummer": "rgba(251, 192, 45, 0.1)",
        borderAutumm: "#E17A02",
        "bgAutumm": "rgba(225, 122, 2, 0.1)",
        borderWinter: "#007DCA",
        "bgWinter": "rgba(0, 125, 202, 0.1)"
      },
      fontFamily: {
        AeonicProAir: ['AeonicProAir', 'sans-serif'],
        AeonicProAirItalic: ['AeonicProAirItalic', 'sans-serif'],
        AeonicProBlack: ['AeonicProBlack', 'sans-serif'],
        AeonicProBlackItalic: ['AeonicProBlackItalic', 'sans-serif'],
        AeonicProBold: ['AeonicProBold', 'sans-serif'],
        AeonicProBoldItalic: ['AeonicProBoldItalic', 'sans-serif'],
        AeonicProLight: ['AeonicProLight', 'sans-serif'],
        AeonicProLightItalic: ['AeonicProLightItalic', 'sans-serif'],
        AeonicProMedium: ['AeonicProMedium', 'sans-serif'],
        AeonicProMediumItalic: ['AeonicProMediumItalic', 'sans-serif'],
        AeonicProRegular: ['AeonicProRegular', 'sans-serif'],
        AeonicProRegularItalic: ['AeonicProRegularItalic', 'sans-serif'],
        AeonicProThin: ['AeonicProThin', 'sans-serif'],
        AeonicProThinItalic: ['AeonicAeonicProThinItalicProMedium', 'sans-serif'],
      },
      boxShadow: {
        myShadow1: "1px -2px 0 0 rgb(17,24,39)",
        myShadow2: "-1px -2px 0 0 rgb(17,24,39)"
      },
    },
    screens: {
      ss: '320px',
      ls: '360px',
      ll: '390px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    }
  },
  plugins: [],
}
