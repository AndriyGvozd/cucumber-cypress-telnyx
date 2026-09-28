import { header } from "./Header";

class MobileMenu {
  get burgerButton() {
    return header.root.find('button[aria-controls="main-menu-content"]');
  }

  get content() {
    return cy.get("#main-menu-content");
  }

  item(name: string) {
    return this.content.contains("button, a", name);
  }

  // Bottom links (Contact us, Log in) live outside #main-menu-content,
  // so search in the whole header and take only the visible link
  link(name: string) {
    return header.root.find("a:visible").contains(name);
  }

  open() {
    this.burgerButton.should("be.visible").and("have.attr", "aria-expanded", "false").click();
  }
}

export const mobileMenu = new MobileMenu();
