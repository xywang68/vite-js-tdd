describe('app page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('opens', () => {
  })

  it('says hello', () => {
    cy.contains('body', 'Hello');
  })

  it('displays vite logo', () => {
    cy.get('[alt="Vite logo"]')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  })

  it('displays JavaSript logo', () => {
    cy.get('[alt="JavaScript logo"]')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  })

  it('has a count button', () => {
    cy
    .get('button')
    .should('be.visible')
    .contains('count');
  })

  it('count is 0', () => {
    cy.contains('button', 'is 0');
  })

  it('has instruction', () => {
    cy.contains('body', 'to learn more');
  })

})