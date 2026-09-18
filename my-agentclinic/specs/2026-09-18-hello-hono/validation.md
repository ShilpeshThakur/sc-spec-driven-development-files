# Hello Hono Validation

## Automated checks

- `npm test` runs the Vitest suite, and the route tests verify:
  - `GET /` returns status `200`.
  - The response is an HTML document with the expected HTML content type.
  - The document has the expected page title.
  - The document includes an `AgentClinic` heading.
  - The document includes `AgentClinic is open for business`.
  - The document includes the short relief-focused introduction.
- `npm run build` completes the TypeScript build successfully.
- `npm run validate` runs both the Vitest suite and TypeScript build successfully.
- The Vitest suite verifies that the linked stylesheet includes responsive layout rules.

## Manual checks

- Start the application with the documented development command.
- Open `/` in a modern browser or request it with an HTTP client.
- Confirm the minimal home page renders with the title, heading, introduction, and expected message, with no runtime errors.
- Check the page at narrow mobile, tablet, and wide desktop viewport widths; confirm there is no horizontal overflow and the header, main content, and footer remain readable.
- Confirm the page remains understandable when styles and JavaScript are unavailable.

## Completion criteria

The feature is complete when `npm run validate` passes and a new contributor can start the server and verify the minimal home page using the project documentation.
