/// <reference types='cypress' />

describe("CY API test", () => {
  it("Find pet by ID", () => {
    cy.request("GET", "https://petstore.swagger.io/v2/pet/5").should(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });

  it("Add a new pet to the store", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/pet", {
      id: 0,
      category: {
        id: 0,
        name: "string",
      },
      name: "doggie",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Update an existing pet", () => {
    cy.request("PUT", "https://petstore.swagger.io/v2/pet", {
      id: 0,
      category: {
        id: 0,
        name: "string",
      },
      name: "doggie",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Delete a pet", () => {
    cy.request("DELETE", "https://petstore.swagger.io/v2/pet/1").should(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
});
