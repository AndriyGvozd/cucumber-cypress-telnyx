import { BasePage } from "./BasePage";

class ResourcesPage extends BasePage {
  get articleLinks() {
    return cy.get('main a[href*="/resources/"]');
  }
}

export const resourcesPage = new ResourcesPage();
