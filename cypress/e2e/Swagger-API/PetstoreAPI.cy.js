/// <reference types='cypress' />
import { url, body } from "../../fixtures/PetstoreData.json";

describe("CY API test", () => {
  it("Find pet by ID", () => {
    cy.request("GET", `${url}/8`).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Add a new pet to the store", () => {
    cy.request("POST", `${url}`, body).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Update an existing pet", () => {
    cy.request("PUT", `${url}`, body).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Delete a pet", () => {
    cy.request("DELETE", `${url}/5`).should(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
});
