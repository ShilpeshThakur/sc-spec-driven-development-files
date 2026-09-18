import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { Home } from './pages/Home'

export const app = new Hono()

const stylesheet = readFileSync(resolve(__dirname, '../src/styles.css'), 'utf8')

app.get('/', (c) => c.html(<Home />))
app.get('/styles.css', (c) => c.text(stylesheet, 200, { 'Content-Type': 'text/css; charset=UTF-8' }))

if (process.env.NODE_ENV !== 'test') {
  serve({ fetch: app.fetch, port: Number(process.env.PORT) || 3000 })
}
