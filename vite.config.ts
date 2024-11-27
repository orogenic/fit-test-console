import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/fit-test-console",
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  }
})