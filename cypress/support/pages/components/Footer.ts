class Footer {
  get root() {
    return cy.get("#site-footer");
  }

  link(text: string) {
    return this.root.contains("a", text);
  }

  // The footer has desktop and mobile copies of social icons, only one is visible
  socialLink(url: string) {
    return this.root.find(`a[href="${url}"]:visible`);
  }

  scrollIntoView() {
    this.root.scrollIntoView();
  }
}

export const footer = new Footer();
