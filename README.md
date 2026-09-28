# Telnyx UI tests: Cypress + Cucumber

End-to-end UI tests for [telnyx.com](https://telnyx.com), written in Gherkin (Cucumber) and run with Cypress + TypeScript.

## Tech stack

- [Cypress](https://www.cypress.io/) 16
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) (Gherkin support)
- TypeScript + esbuild
- [multiple-cucumber-html-reporter](https://github.com/WasiqB/multiple-cucumber-html-reporter) (HTML report)
- Page Object pattern

## Getting started

Requirements: Node.js 20+.

```bash
npm install
npm test
```

## Commands

| Command                 | Description                                         |
|-------------------------|-----------------------------------------------------|
| `npm run open`          | Open Cypress UI (interactive mode)                  |
| `npm test`              | Run all tests headless with the local config        |
| `npm run test:ci`       | Run all tests with the CI config                    |
| `npm run test:critical` | Run only scenarios tagged `@critical`               |
| `npm run report`        | Build the HTML report from `reports/cucumber.json`  |

To run tests by any tag expression:

```bash
npx cypress run --config-file config/cypress.config.ts --expose tags="@high or @critical"
```

The HTML report is generated at `reports/html/index.html`.

## Configuration

| File                          | Purpose                                                                 |
|-------------------------------|-------------------------------------------------------------------------|
| `config/base.config.ts`       | Shared settings: base URL, spec pattern, viewport, Cucumber preprocessor |
| `config/cypress.config.ts`    | Local runs: no retries, no video                                        |
| `config/cypress.ci.config.ts` | CI runs: 2 retries, longer timeouts, video and screenshots on failure   |
| `.cypress-cucumber-preprocessorrc.json` | Step definitions location, tag filtering, JSON report output  |

## Project structure

```
config/                       Cypress configs (base, local, CI)
cypress/
  e2e/                        Feature files (Gherkin scenarios)
  support/
    e2e.ts                    Global hooks, loaded before every spec
    pages/                    Page Objects
      components/             Parts shared by all pages (header, footer, cookie banner, mobile menu)
    step_definitions/         Step implementations, grouped by feature
scripts/
  generate-report.mjs         HTML report generator
reports/                      Test results (git-ignored)
```

## Test cases

Every scenario is tagged with its test plan ID and priority, e.g. `@TC-01 @critical`.

| ID    | Title                                           | Priority | Feature file      |
|-------|-------------------------------------------------|----------|-------------------|
| TC-01 | Home page loads successfully                    | Critical | `home.feature`    |
| TC-02 | Accept cookie banner                            | High     | `cookies.feature` |
| TC-03 | Main navigation menu items are displayed        | High     | `header.feature`  |
| TC-04 | Voice API product page content                  | Medium   | `header.feature`  |
| TC-05 | Pricing page opens from header                  | High     | `header.feature`  |
| TC-06 | Redirect to Resources page                      | Medium   | `header.feature`  |
| TC-07 | Sign up page opens                              | Critical | `signup.feature`  |
| TC-08 | Sign up form validation with empty fields       | High     | `signup.feature`  |
| TC-09 | Sign up form validation with invalid email      | High     | `signup.feature`  |
| TC-10 | Contact form validation with empty fields       | Medium   | `contact.feature` |
| TC-11 | Log in link redirects to portal                 | Critical | `login.feature`   |
| TC-12 | Footer links are displayed and valid            | Low      | `footer.feature`  |
| TC-13 | Social media links in footer                    | Low      | `footer.feature`  |
| TC-14 | Burger menu on mobile viewport                  | Medium   | `mobile.feature`  |
| TC-15 | Non-existent page shows 404                     | Low      | `errors.feature`  |

## Notes

- Forms (Sign up, Contact us) are only checked for validation. Nothing is actually submitted.
- Uncaught errors from third-party scripts on telnyx.com (analytics, chat widgets) are ignored in `cypress/support/e2e.ts`, because they are not related to the tested functionality.
- Links that open in a new tab (Log in) are opened in the same tab, because Cypress works in a single tab. The `target="_blank"` attribute is still verified.
- Social media links are verified by URL only. External sites block automated browsers.
- TC-15 uses `/products/non-existent-page-123`. A root-level non-existent URL returns an empty 404 response with no page content.
