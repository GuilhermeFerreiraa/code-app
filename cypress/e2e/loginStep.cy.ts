describe('Trying open my localhost', () => {
  it('Checking the content of my app', () => {
    cy.visit('http://localhost:3000');
    cy.get('#email').clear().type('test@test.com');
    cy.get('#password').click();
    cy.get('#password').clear().type('test123456');
    cy.get('form').submit()
    cy.get('div').contains('🔒 Login feito com sucesso!')
  })
})