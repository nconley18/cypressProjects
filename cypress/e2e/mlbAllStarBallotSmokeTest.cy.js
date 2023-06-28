describe('smoke', () => {
  beforeEach(() => {
    cy.visit('https://www.mlb.com/all-star/ballot')
    cy.get('#onetrust-accept-btn-handler').click()
  })

  it('should vote thew first option at every position', () => {

    //selecting the players we wish to vote for, in this case the first option at every group available for voting
    //had to change this to cy.contains instead of cy.get since the OPS and stat numbers in the object name update regularly
    cy.contains('Y. Diaz').click()
    cy.contains('W. Merrifield').click()
    cy.contains('M. Chapman').click()
    cy.contains('B. Bichette').click()
    cy.contains('J. Heim').click()
    cy.contains('Y. Alvarez').click()
    cy.contains('R. Arozarena').click()
    cy.contains('A. Garcia').click()
    cy.contains('F. Freeman').click()
    cy.contains('O. Albies').click()
    cy.contains('N. Arenado').click()
    cy.contains('O. Arcia').click()
    cy.contains('S. Murphy').click()
    cy.contains('M. Betts').click()
    cy.contains('C. Carroll').click()
    cy.contains('B. Harper').click()


    //best way I have found so far to verify that each player has been selected, that the team logo exists since the unselected carousel positions do not have a team logo
    
    //validating AL votes
    cy.get('#carousel-position3 > .selected-player.al > .selected-player__team').should('exist')
    cy.get('#carousel-position4 > .selected-player.al > .selected-player__team').should('exist')
    cy.get('#carousel-position5 > .selected-player.al > .selected-player__team').should('exist')
    cy.get('#carousel-position6 > .selected-player.al > .selected-player__team').should('exist')
    cy.get('#carousel-position2 > .selected-player.al > .selected-player__team').should('exist')
    cy.get('#carousel-positionO > :nth-child(1) > .selected-player__team').should('exist')
    cy.get(':nth-child(2) > .selected-player__team').should('exist')
    cy.get(':nth-child(3) > .selected-player__team').should('exist')

    //validating NL votes
    cy.get('#carousel-position3 > .selected-player.nl > .selected-player__team').should('exist')
    cy.get('#carousel-position4 > .selected-player.nl > .selected-player__team').should('exist')
    cy.get('#carousel-position5 > .selected-player.nl > .selected-player__team').should('exist')
    cy.get('#carousel-position6 > .selected-player.nl > .selected-player__team').should('exist')
    cy.get('#carousel-position2 > .selected-player.nl > .selected-player__team').should('exist')
    cy.get(':nth-child(5) > .selected-player__team').should('exist')
    cy.get(':nth-child(6) > .selected-player__team').should('exist')
    cy.get('#carousel-position10 > .selected-player.nl > .selected-player__team').should('exist')

  })

  //most likely would add another test here to test the ballot submittal and redirection, but site will be down soon unfortunately.

})