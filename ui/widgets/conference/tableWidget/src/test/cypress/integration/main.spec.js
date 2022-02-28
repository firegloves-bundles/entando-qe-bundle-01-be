import { customElementName } from '../support';

describe('Main', () => {
  beforeEach(() => {
    cy.getOauth2Data();
    cy.get('@oauth2Data').then((oauth2Data) => {
      cy.keycloackLogin(oauth2Data, 'user');
    });
  });

  afterEach(() => {
    cy.get('@oauth2Data').then((oauth2Data) => {
      cy.keycloackLogout(oauth2Data);
    });
    cy.clearCache();
  });

  describe('Table widget', () => {
    it('should load the page', () => {
      cy.get(customElementName).should('exist');
    });

    it('should display all the entity fields in the component', () => {
      cy.contains('entities.conference.id').scrollIntoView().should('be.visible');
      cy.contains('entities.conference.room').scrollIntoView().should('be.visible');
      cy.contains('entities.conference.name').scrollIntoView().should('be.visible');
    });
  });
});