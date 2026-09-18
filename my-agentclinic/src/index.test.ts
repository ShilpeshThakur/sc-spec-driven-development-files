import { describe, expect, it } from 'vitest'
import { app } from './index'

describe('home page', () => {
  it('serves the AgentClinic introduction as HTML', async () => {
    const response = await app.request('/')
    const body = await response.text()

    expect(response.status).toBe(200)
    expect(response.headers.get('content-type')).toMatch(/text\/html/)
    expect(body).toContain('<title>AgentClinic</title>')
    expect(body).toContain('<header>')
    expect(body).toContain('<main>')
    expect(body).toContain('<footer>')
    expect(body).toContain('<link rel="stylesheet" href="/styles.css"/>')
    expect(body).toContain('<h1>AgentClinic</h1>')
    expect(body).toContain('AgentClinic is open for business')
    expect(body).toContain('help AI agents find relief')
  })

  it('serves the linked stylesheet', async () => {
    const response = await app.request('/styles.css')

    expect(response.status).toBe(200)
    expect(response.headers.get('content-type')).toMatch(/text\/css/)
    const stylesheet = await response.text()

    expect(stylesheet).toContain('--')
    expect(stylesheet).toContain('@media (max-width: 40rem)')
  })
})
