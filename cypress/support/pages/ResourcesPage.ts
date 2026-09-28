class ResourcesPage {
  get heading() {
    return cy.get("main h1").first();
  }

  get articleLinks() {
    return cy.get('main a[href*="/resources/"]');
  }
}

export const resourcesPage = new ResourcesPage();
