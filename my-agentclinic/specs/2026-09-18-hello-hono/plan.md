# Hello Hono Plan

1. **Set up the Hono server**
   - Add the Hono, `tsx`, and required TypeScript development dependencies.
   - Configure the project scripts for local development and production type-check/build.
   - Create the smallest server entry point needed to start the application.

2. **Build a minimal AgentClinic home page**
   - Render a complete, valid HTML document with Hono JSX.
   - Include an accessible page title, an `AgentClinic` heading, and the message `AgentClinic is open for business`.
   - Add a small introductory paragraph explaining that AgentClinic helps AI agents find relief.
   - Use simple semantic HTML and keep styling out of scope for the full Base Layout phase.

3. **Connect the home route**
   - Add a `GET /` route.
   - Return the minimal home page as an HTML response.
   - Keep the route independent of future domain and database concerns.

4. **Add focused verification**
   - Add Vitest tests for the route status, page title, heading, message, and HTML content type.
   - Add a `validate` package script that runs the Vitest suite and TypeScript build together.
   - Confirm the complete `npm run validate` command succeeds.
   - Document the local development command and expected result.

5. **Add the shared main layout**
   - Organize reusable `Layout`, `Header`, `Main`, and `Footer` components under `src/components`.
   - Organize the home page under `src/pages` and import it from the server entry point.
   - Render the home page content inside the shared layout.
   - Keep the structure semantic and usable without CSS or JavaScript.

6. **Add and connect the base stylesheet**
   - Create a CSS file with custom properties, a small reset, readable typography, and basic layout styles.
   - Add responsive styles so the layout remains usable at narrow, medium, and wide viewport widths.
   - Serve the stylesheet from the application and link it from the layout document head.
   - Extend focused verification to cover the layout landmarks and stylesheet response.
