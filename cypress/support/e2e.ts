// Loaded automatically before every spec file

// Third-party scripts on telnyx.com (analytics, chat widgets) throw cross-origin errors
// that browsers report only as "Script error." - they are unrelated to the tested functionality.
// Any other uncaught error is a real error of the site and must fail the test.
Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Script error") || err.message.includes("cross origin")) {
    return false;
  }
  return true;
});
