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
        // set wear
        setButtonColor: "#E8E8E8",
        setTexOpacity: "#A1A1A1",
        setPriceRed: "#D50000",

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

        // Chrome for
        // 400
        AeonikProRegular: ['OTFAeonikProRegular', 'sans-serif'],  
        // 500
        AeonikProMedium: ['OTFAeonikProMedium', 'sans-serif'], 
       
        
      },
      boxShadow: {
        myShadow1: "1px -2px 0 0 rgb(17,24,39)",
        myShadow2: "-1px -2px 0 0 rgb(17,24,39)",
        cardShadow: "0px 3px 10px 0px rgba(0,0,0,0.06)",

      },
    },
    letterSpacing: {
      '1': '0.01em',

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
