describe("testing sprint", () => {
  it("navigates to site", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.url().should("include", "3000");
  });
  it("adds a name", () => {
    cy.get("#name").type("Chris").should("have.value", "Chris");
  });
  it("checks multiple toppings", () => {
    cy.get("#cheese").check().should("be.checked");
    cy.get("#pepperoni").check().should("be.checked");
  });
  it("submits order", () => {
    cy.contains("Place Order").click();
  });
});
