describe('Implicit Assertion', () => {
  it('testing implicit assertion', () => {
    cy.visit('http://socialscope.link/')
    cy.contains("Start Here").click();
    cy.get('input[name=query]').type('test')
    cy.get('input[name=sentiment][value=false]').check()
    cy.get('input[name=sentiment][value=true]')
        .should('not.be.checked')
    cy.get('input[name=twitter]').uncheck()
    cy.get('input[name=reddit]').uncheck()
    cy.get('input[name=youtube]').uncheck()
    cy.get('input[name=twitter]').check()
    cy.get('input[name=reddit]').check()
    cy.get('input[name=youtube]').check()
    cy.get('input[name=twitter]')
        .should('be.visible')
        .and('be.checked')
    cy.get('input[name=reddit]')
        .should('be.visible')
        .and('be.checked')
    cy.get('input[name=youtube]')
        .should('be.visible')
        .and('be.checked')
    cy.contains("Launch Search").click()
  })
})

describe('Explicit Assertion', () => {
  it('testing explicit assertion', () => {
    let name = "Thien Huynh";
    expect(name).to.be.equal("Thien Huynh");
    assert.equal(4, "4", "Equal");
    assert.strictEqual("4", "4", "Equal");
  })
})

describe('GitHub Actions Test', () => {
  it('github actions tests', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("THIEN HUYNH DOING CYPRESS TEST");
    cy.contains("Increase").click()
    cy.contains("Increase").click()
    cy.contains("Increase").click()
    cy.contains("Increase").click()
    cy.contains("Increase").click()
    cy.contains("Decrease").click()
    cy.contains("Decrease").click()
    cy.contains("4");
  })
})