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
        borderColorCard:"#c1c1c1",
      },
      fontFamily:  {
        aeonicProBold: ['AeonicProBold', 'sans-serif'],
        aeonicProLight: ['AeonicProLight', 'sans-serif'],
        aeonicProRegular: ['AeonicProRegular', 'sans-serif'],
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
