const { guessProductionMode } = require("@ngneat/tailwind");
const colors = require("tailwindcss/colors");
process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";

module.exports = {
    prefix: "",
    purge: {
        content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
    },
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                sm: "480px",
                md: "768px",
                lg: "976px",
                xl: "1440px",
            },
            colors: {
                gray: colors.coolGray,
                blue: colors.lightBlue,
                red: colors.rose,
                pink: colors.fuchsia,
            },
            fontFamily: {
                sans: ["Graphik", "sans-serif"],
                serif: ["Merriweather", "serif"],
            },
            extend: {
                spacing: {
                    128: "32rem",
                    144: "36rem",
                },
                borderRadius: {
                    "4xl": "2rem",
                },
            },
        },
    },

    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/forms"), require("@tailwindcss/line-clamp"), require("@tailwindcss/typography"), require("daisyui")],
};
