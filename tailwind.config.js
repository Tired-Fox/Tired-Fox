/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,jdx,ts,tsx}"
  ],
  theme: {
    extend: {
        typography: {
            DEFAULT: {
                css: {
                    maxWidth: '100ch',
                }
            }
        }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

