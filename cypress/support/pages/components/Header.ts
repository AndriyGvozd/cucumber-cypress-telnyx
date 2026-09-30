class Header {
  get root() {
    return cy.get("#site-header");
  }

  get logo() {
    return this.root.find('a[href="/"]:visible').first();
  }

  // Top-level items are Radix UI dropdown triggers; their ids are generated, so the item is found
  // by the dropdown attribute and its label
  get menuItems() {
    return this.root.find('button[aria-haspopup="menu"]:visible');
  }

  menuItem(name: string) {
    return this.root.contains('button[aria-haspopup="menu"]', name);
  }

  openMenu(name: string) {
    this.menuItem(name).should("be.visible").click();
  }

  get openedDropdown() {
    return cy.get('[role="menu"][data-state="open"]');
  }

  // Several links in one dropdown can lead to the same page, so the label narrows the match
  dropdownLink(name: string, path: string) {
    return this.openedDropdown.contains(`a[href="${path}"]`, name);
  }

  get signUpButton() {
    return this.root.find('a[href="/sign-up"]:visible');
  }

  get logInLink() {
    return this.root.find('a[href*="portal.telnyx.com"]:visible');
  }
}

export const header = new Header();
