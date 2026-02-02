import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // 👈 mobile / network access allow
    port: 5173       // default Vite port
  }
})
