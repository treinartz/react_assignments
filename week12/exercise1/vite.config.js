import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/react_assignments/week12/exercise1/',

  plugins: [react()],
})
