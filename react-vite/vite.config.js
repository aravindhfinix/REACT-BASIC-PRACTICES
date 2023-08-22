import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4300, // Replace this with your desired port number
  },
  plugins: [react()],
})
