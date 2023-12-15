import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: `https://line-app.justplaybase.com/app-v1/sandbox/dist/`,
  // root: "./",
  // build: {
  //   outDir: "dist",
  // },
  base: "/app-v1/sandbox",
  // publicDir: "public"
})
