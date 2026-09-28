// Loaded automatically before every spec file

// Telnyx loads third-party scripts that throw cross-origin errors unrelated to our tests
Cypress.on("uncaught:exception", () => false);
