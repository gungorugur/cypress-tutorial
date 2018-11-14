describe("Üye Giriş Testleri", function () {

    beforeEach(function () {
        cy.visit("https://www.supplementler.com/login");
    });

    context("Diyelim ki, kullanıcı giriş yapmak istedi", function () {

        specify(
            "Eğer kullanıcı hatalı email girerse, o zaman hatalı email mesajı görüntülenir.",
            function () {
                cy.get("#Email").type("test{enter}");
                cy.contains("Yanlış e-posta");
            },
        );

        specify(
            "Eğer kullanıcı geçerli email ve hatalı şifre girerse, o zaman hatalı şifre mesajı görüntülenir.",
            function () {
                cy.get("#Email").type("test@test.com{enter}");
                cy.get("#Password").type("{enter}");
                cy.contains("Şifrenizi giriniz");
            },
        );

        specify(
            "Eğer kullanıcı sistemde var olmayan geçerli email ve şifre girerse, o zaman hatalı bilgi mesajı görüntülenir.",
            function () {
                cy.get("#Email").type("test@test.com");
                cy.get("#Password").type("12345");
                cy.contains("Giriş Yap").click();
                cy.contains("Giriş başarısız oldu. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz.");
                cy.contains("Hatalı bilgi girildi.");
            },
        );

        specify(
            "Eğer kullanıcı sistemde var olan geçerli email ve şifre girerse, o zaman hesabımı görüntüleyebilir.",
            function () {
                cy.get("#Email").type("dogruemail@gmail.com");
                cy.get("#Password").type("dogrrusifre");
                cy.contains("Giriş Yap").click();
                cy.contains("Hesabım");
            },
        );
    });
});