import { defineConfig } from 'vite'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
    root: 'src/frontend',
    preview: {
        port: "3003"
    }
})
  