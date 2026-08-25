class BookTicket {
    constructor(page, uTitle) {
        this.page = page;
        this.bEvent = page.getByTestId("nav-events");
        this.pButton = page.getByRole('button', { name: '+' });
        this.cName = page.locator("#customerName");
        this.fEmail = page.getByPlaceholder("you@email.com");
        this.cNumber = page.locator("#phone");
        this.confirmB = page.locator("#confirm-booking");

    }
    async BookEvent(uTitle, uName, uEmail, uNumber) {
        await this.bEvent.click();
        await this.page.getByText(uTitle).click();
        for (let i = 0; i < 4; i++) {
            await this.pButton.click();
        };

        await this.cName.fill(uName);
        await this.fEmail.fill(uEmail);
        await this.cNumber.fill(uNumber);
        await this.confirmB.click();


    }
}
module.exports = { BookTicket }
