const { expect } = require('@playwright/test');
class CreateEvent {
    constructor(page) {

        this.page = page;
        this.browserButton = page.getByText('Browse Events →', { exact: true });
        this.addNew = page.getByRole("button", { name: "Add New Event" });
        this.nTitle = page.getByTestId("event-title-input");
        this.nDes = page.getByPlaceholder("Describe the event…");
        this.nCat = page.locator("#category");
        this.nCity = page.locator("#city");
        this.nVenue = page.locator("#venue");
        this.sDate = page.getByRole('textbox', { name: 'Event Date & Time*' });
        this.nprice = page.getByPlaceholder("0.00");
        this.nSeat = page.getByPlaceholder("e.g. 500");
        this.cEVent = page.getByTestId("add-event-btn");
    }

    async CreteNewEvent(uTitle, uDes, uTime) {
        await this.browserButton.click();
        await this.addNew.click();
        await this.nTitle.fill(uTitle);
        await this.nDes.fill(uDes);
        await this.nCat.selectOption("Workshop");
        await this.nCity.fill("Dhaka");
        await this.nVenue.fill("Gulshan");
        await this.sDate.fill(uTime);
        await this.nprice.fill("100");
        await this.nSeat.fill("500");
        await this.cEVent.click();
        await expect(this.page.getByText(uTitle)).toBeVisible();
        console.log("Event Title verified and clicked Successfully!");

    }
}

module.exports = { CreateEvent };



