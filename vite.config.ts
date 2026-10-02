import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const appDir = path.dirname(fileURLToPath(import.meta.url))
const parentDir = path.resolve(appDir, '..')
const imagePattern = /\.(png|jpe?g|webp|gif)$/i

function contentType(file: string) {
    const extension = path.extname(file).toLowerCase()
    if (extension === '.png') return 'image/png'
    if (extension === '.jpg' || extension === '.jpeg') return 'image/jpeg'
    if (extension === '.webp') return 'image/webp'
    if (extension === '.gif') return 'image/gif'
    return 'application/octet-stream'
}

function serveParentAssets(): Plugin {
    return {
        name: 'serve-parent-portfolio-assets',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                const raw = req.url?.split('?')[0] ?? ''
                if (!imagePattern.test(raw)) {
                    next()
                    return
                }

                const relative = decodeURIComponent(raw).replace(/^\/+/, '')
                const file = path.resolve(parentDir, relative)
                const insideParent = file === parentDir || file.startsWith(parentDir + path.sep)
                if (!insideParent || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
                    next()
                    return
                }

                res.statusCode = 200
                res.setHeader('Content-Type', contentType(file))
                fs.createReadStream(file).pipe(res)
            })
        },
        closeBundle() {
            const outDir = path.resolve(appDir, 'dist')
            if (!fs.existsSync(outDir)) return
            for (const name of ['8.png', 'CoverWDK.jpg', 'CoverWDK-responsive.jpg']) {
                const from = path.join(parentDir, name)
                if (fs.existsSync(from)) {
                    fs.copyFileSync(from, path.join(outDir, name))
                }
            }
        },
    }
}

export default defineConfig({
    plugins: [react(), serveParentAssets()],
})
