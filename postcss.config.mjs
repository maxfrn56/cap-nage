/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    // autoprefixer désactivé : provoquait une erreur de build avec le css-loader
    // autoprefixer: {},
  },
};
export default config;
