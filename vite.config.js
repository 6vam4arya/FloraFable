export default defineConfig({
  plugins: [
    react({
      plugins: [["@styled-components/swc-plugin", { ssr: false }]],
    }),
  ],
});
