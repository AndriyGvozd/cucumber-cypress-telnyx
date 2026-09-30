import { header } from "./Header";

class MobileMenu {
  get burgerButton() {
    return header.root.find("[data-mobile-drawer-toggle]");
  }

  get menu() {
    return cy.get("#main-menu");
  }

  get content() {
    return cy.get("#main-menu-content");
  }

  item(name: string) {
    return this.content.contains('button[aria-haspopup="menu"]', name);
  }

  // Bottom links (Contact us, Log in) live outside #main-menu-content, and the header has hidden
  // copies of them, so search in the whole header and take only the visible link
  link(path: string) {
    return header.root.find(`a[href$="${path}"]:visible`);
  }

  open() {
    this.burgerButton.should("be.visible").and("have.attr", "aria-expanded", "false").click();
  }
}

export const mobileMenu = new MobileMenu();
