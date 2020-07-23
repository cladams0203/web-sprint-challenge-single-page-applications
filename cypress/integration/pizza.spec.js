describe("testing sprint", () => {
  it("navigates to site", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "3000");
  });
  it("Home button present", () => {
    cy.contains("home").should("not.be.disabled");
  });
});
