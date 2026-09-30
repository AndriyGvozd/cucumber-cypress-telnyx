import { BasePage } from "./BasePage";

class ResourcesPage extends BasePage {
  // Unlike other content pages, the Resources heading has its own id
  get heading() {
    return cy.get("#resources-hero-heading");
  }

  // Article cards are in the list of the "learn" section; topic filter links are outside the list
  get articleList() {
    return cy.get("#learn ul");
  }

  get visibleArticleLinks() {
    return this.articleList.find('a[href^="/resources/"]:visible');
  }

  // Cards are rendered visible only after the list is scrolled into view
  scrollToArticles() {
    this.articleList.scrollIntoView();
  }
}

export const resourcesPage = new ResourcesPage();
