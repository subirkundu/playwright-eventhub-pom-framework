class LoginPage {
    constructor(page) {
        this.page = page;
        this.userEmail = page.getByPlaceholder("you@email.com");
        this.userPass = page.locator("#password");
        this.signIn = page.locator("#login-btn");
    }

    async goTo() {
        await this.page.goto("https://eventhub.rahulshettyacademy.com/login");
        console.log(await this.page.title());
    }

    async logInProcess(uEmail, uPass) {
        await this.userEmail.fill(uEmail);
        await this.userPass.fill(uPass);
        await this.signIn.click();
    }
}

module.exports = { LoginPage };