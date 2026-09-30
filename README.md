# Telnyx UI tests: Cypress + Cucumber

[![E2E tests](https://github.com/AndriyGvozd/cucumber-cypress-telnyx/actions/workflows/e2e.yml/badge.svg)](https://github.com/AndriyGvozd/cucumber-cypress-telnyx/actions/workflows/e2e.yml)

**Latest test report:** https://andriygvozd.github.io/cucumber-cypress-telnyx/

**Test plan (15 test cases):** [Google Sheets](https://docs.google.com/spreadsheets/d/1PAosYndXiqYWPgMvU4DTYdktVNmZUG-YbsHvIRwLQy4/edit?gid=192333436#gid=192333436)

End-to-end UI tests for [telnyx.com](https://telnyx.com), written in Gherkin (Cucumber) and run with Cypress + TypeScript.

## Tech stack

- [Cypress](https://www.cypress.io/) 16
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) (Gherkin support)
- TypeScript + esbuild
- [multiple-cucumber-html-reporter](https://github.com/WasiqB/multiple-cucumber-html-reporter) (HTML report)
- Page Object pattern

## Getting started

Requirements: Node.js 22+ (see `.nvmrc`).

```bash
npm install
npm test
```

## Commands

| Command                 | Description                                        |
| ----------------------- | -------------------------------------------------- |
| `npm run open`          | Open Cypress UI (interactive mode)                 |
| `npm test`              | Run all tests headless with the local config       |
| `npm run test:ci`       | Run all tests with the CI config                   |
| `npm run test:critical` | Run only scenarios tagged `@critical`              |
| `npm run report`        | Build the HTML report from `reports/cucumber.json` |
| `npm run typecheck`     | TypeScript type check                              |
| `npm run lint`          | ESLint (with `eslint-plugin-cypress`)              |
| `npm run format`        | Format code with Prettier                          |

To run tests by any tag expression:

```bash
npx cypress run --config-file config/cypress.config.ts --expose tags="@high or @critical"
TAGS="@TC-5" npm run test:ci
```

`TAGS` is read by `config/cypress.ci.config.ts`, so `npm run test:ci` works in any shell. On Windows, set the variable with `set TAGS=@TC-5` (cmd) or `$env:TAGS="@TC-5"` (PowerShell) before running it.

The HTML report is generated at `reports/html/index.html`.

## Configuration

| File                                    | Purpose                                                                  |
| --------------------------------------- | ------------------------------------------------------------------------ |
| `config/base.config.ts`                 | Shared settings: base URL, spec pattern, viewport, Cucumber preprocessor |
| `config/cypress.config.ts`              | Local runs: no retries, no video                                         |
| `config/cypress.ci.config.ts`           | CI runs: 2 retries, longer timeouts, video and screenshots on failure    |
| `.cypress-cucumber-preprocessorrc.json` | Step definitions location, tag filtering, JSON report output             |

## Project structure

```
config/                       Cypress configs (base, local, CI)
cypress/
  e2e/                        Feature files (Gherkin scenarios)
  fixtures/
    content.json              Expected texts and URLs used by steps and page objects
  support/
    e2e.ts                    Global setup, loaded before every spec
    constants.ts              Shared constants (timeouts)
    pages/                    Page Objects
      BasePage.ts             Common parts of content pages
      components/             Parts shared by all pages (header, footer, cookie banner, mobile menu)
    step_definitions/         Step implementations, grouped by feature
      hooks.ts                Cucumber hooks (cookie banner precondition)
scripts/
  generate-report.mjs         HTML report generator
reports/                      Test results (git-ignored)
```

## CI pipeline

The [E2E tests](.github/workflows/e2e.yml) workflow runs on every push and pull request to `main`, nightly at 03:00 UTC, and can be started manually from the Actions tab with an optional tag expression (e.g. `@critical`).

1. `lint` job: type check, ESLint and Prettier check.
2. `test` job: runs all tests with `config/cypress.ci.config.ts` and builds the HTML report.
3. On failure, uploads screenshots and videos as the `cypress-failures` artifact.
4. For pull requests, the HTML report is uploaded as the `html-report` artifact.
5. `deploy-report` job: publishes the report to GitHub Pages (from `main`, even when tests fail).

## Test cases

Every scenario is tagged with its test plan ID and priority, e.g. `@TC-1 @critical`.

| ID    | Title                                      | Priority | Feature file      |
| ----- | ------------------------------------------ | -------- | ----------------- |
| TC-1  | Home page loads successfully               | Critical | `home.feature`    |
| TC-2  | Accept cookie banner                       | High     | `cookies.feature` |
| TC-3  | Main navigation menu items are displayed   | High     | `header.feature`  |
| TC-4  | Voice API product page content             | Medium   | `header.feature`  |
| TC-5  | Pricing page opens from header             | High     | `header.feature`  |
| TC-6  | Redirect to Resource Center page           | Medium   | `header.feature`  |
| TC-7  | Sign up page opens                         | Critical | `signup.feature`  |
| TC-8  | Sign up form validation with empty fields  | High     | `signup.feature`  |
| TC-9  | Sign up form validation with invalid email | High     | `signup.feature`  |
| TC-10 | Contact form validation with empty fields  | Medium   | `contact.feature` |
| TC-11 | Log in link redirects to portal            | Critical | `login.feature`   |
| TC-12 | Footer links are displayed and valid       | Low      | `footer.feature`  |
| TC-13 | Social media links in footer               | Low      | `footer.feature`  |
| TC-14 | Burger menu on mobile viewport             | Medium   | `mobile.feature`  |
| TC-15 | Non-existent page shows 404                | Low      | `errors.feature`  |

## Notes

- Forms (Sign up, Contact us) are only checked for validation. Nothing is actually submitted.
- The precondition "cookie banner is closed" is applied by a `Before` hook to every scenario except TC-2. Cookies are accepted once and cached with `cy.session`.
- Cross-origin `Script error.` exceptions from third-party scripts (analytics, chat widgets) are ignored in `cypress/support/e2e.ts`. Any other uncaught error fails the test.
- Links that open in a new tab (Log in) are opened in the same tab, because Cypress works in a single tab. The `target="_blank"` attribute is still verified.
- Social media links are verified by URL only. External sites block automated browsers.
- TC-15 uses `/products/non-existent-page-123`. A root-level non-existent URL returns an empty 404 response with no page content.
