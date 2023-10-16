/*
 * @Author: Wmengti 0x3ceth@gmail.com
 * @LastEditTime: 2023-07-31 14:55:27
 * @Description:
 */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-31': '#1F1F1F',
        // pink: '#E479FF',
        // blue: '#39DBFF',
        // purple: '#C448FF',
      },
      boxShadow: {
        '3xl': '0px 12px 20px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  variants: {},
  plugins: [],
};
