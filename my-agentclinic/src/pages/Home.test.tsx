import { renderToString } from 'hono/jsx/dom/server'
import { describe, expect, it } from 'vitest'
import { Home } from './Home'

describe('Home page component', () => {
  it('renders the shared semantic layout', () => {
    const html = renderToString(<Home />)

    expect(html).toContain('<html lang="en">')
    expect(html).toContain('<header>')
    expect(html).toContain('<main>')
    expect(html).toContain('<footer>')
    expect(html).toContain('<link rel="stylesheet" href="/styles.css"/>')
  })

  it('renders the home page content', () => {
    const html = renderToString(<Home />)

    expect(html).toContain('<h1>AgentClinic</h1>')
    expect(html).toContain('AgentClinic is open for business')
    expect(html).toContain('help AI agents find relief')
  })
})
