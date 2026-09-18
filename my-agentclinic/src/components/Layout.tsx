import type { Child } from 'hono/jsx'
import { Footer } from './Footer'
import { Header } from './Header'
import { Main } from './Main'

export const Layout = ({ children }: { children: Child }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AgentClinic</title>
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </body>
  </html>
)
