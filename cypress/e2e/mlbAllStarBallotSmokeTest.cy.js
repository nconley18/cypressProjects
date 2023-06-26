describe('smoke', () => {
  beforeEach(() => {
    cy.visit('https://www.mlb.com/all-star/ballot')
    cy.get('#onetrust-accept-btn-handler').click()
  })

  it('should vote thew first option at every position', () => {

    //selecting the players we wish to vote for, in this case the first option at every group available for voting
    cy.get('[aria-label="Yandy Díaz, American League First Baseman. .316 Batting Average 12 Home Runs 38 Runs Batted In .922 On Base Plus Slugging. Click to vote for Yandy Díaz."]').click()


    //best way I have found so far to verify that each player has been selected, that the team logo exists since the unselected carousel positions do not have a team logo
    cy.get('#carousel-position3 > .selected-player.al > .selected-player__team').should('exist')
    
  })

})