describe('Dördüncü Senaryo', function () {

    it('Supplementlere git ve üye girişine tıkla', function () {
        cy.visit("www.supplementler.com")
        cy.contains("Üye Girişi").click();
        cy.url().should('include', '/login')
    })
});