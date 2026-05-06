import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://simple-signin-signup-portal-backend.vercel.app/'
    }
  },
  plugins: [react()],
})
