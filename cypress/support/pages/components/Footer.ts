class Footer {
  get root() {
    return cy.get("#site-footer");
  }

  link(path: string) {
    return this.root.find(`a[href="${path}"]:visible`);
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
