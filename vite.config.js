import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/shortbot_among_us/', // <-- your repo name
  plugins: [react()],
})