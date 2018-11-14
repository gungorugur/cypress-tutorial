describe('Üçüncü Senaryo', function () {

    it('Supplementlere git ve element sorgula', function () {
        cy.visit("www.supplementler.com")
        cy.contains("Üye Girişi")
    })
});