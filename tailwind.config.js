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
        borderSummer: "#EAA700",
        "bgSummer": "rgba(234, 167, 0, 0.1)",
        borderAutumm: "#E17A02",
        "bgAutumm": "rgba(225, 122, 2, 0.1)",
        borderWinter: "#007DCA",
        "bgWinter": "rgba(0, 125, 202, 0.1)",

      },
      fontFamily: {
        // 300
        AeonikProLight: ['AeonikProLight', 'sans-serif'], // 300
        AeonikProLightItalic: ['AeonikProLightItalic', 'sans-serif'], // 300
        // 400
        AeonikProRegular: ['AeonikProRegular', 'sans-serif'], // 400
        AeonikProRegularItalic: ['AeonikProRegularItalic', 'sans-serif'], // 400
        // 500
        AeonikProMedium: ['AeonikProMedium', 'sans-serif'], // 500
        AeonikProMediumItalic: ['AeonikProMediumItalic', 'sans-serif'], // 500
        // 700
        AeonikProBold: ['AeonikProBold', 'sans-serif'],
        AeonikProBoldItalic: ['AeonikProBoldItalic', 'sans-serif'], // 700
      },
      boxShadow: {
        myShadow1: "1px -2px 0 0 rgb(17,24,39)",
        myShadow2: "-1px -2px 0 0 rgb(17,24,39)",
        cardShadow: "0px 3px 10px 0px rgba(0,0,0,0.06)",
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
