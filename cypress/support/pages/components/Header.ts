class Header {
  get root() {
    return cy.get("#site-header");
  }

  get logo() {
    return this.root.find('a[href="/"]');
  }

  menuItem(name: string) {
    return this.root.contains("button", name);
  }

  openMenu(name: string) {
    this.menuItem(name).should("be.visible").click();
  }

  dropdownLink(name: string) {
    return this.root.find("a:visible").contains(name);
  }

  get signUpButton() {
    return this.root.find('a[href="/sign-up"]:visible');
  }

  get logInLink() {
    return this.root.find('a[href*="portal.telnyx.com"]:visible');
  }

}

export const header = new Header();