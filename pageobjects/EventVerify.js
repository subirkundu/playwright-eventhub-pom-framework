const { expect } = require('@playwright/test');
class EventVerify {
    constructor(page) {
        this.page = page;
        this.mBooking = page.getByRole("button", { name: "View My Bookings" });
    }
    async VerifyingEvent(uName, uEmail, uNumber) {

        const bookingRef = await this.page.locator(".booking-ref").textContent();
        await this.mBooking.click();
        await expect(this.page.getByText(bookingRef)).toBeVisible();
        console.log("Booking Reference verified Successfully!");
        await this.page.getByTestId("booking-card").filter({ hasText: bookingRef }).getByRole('button', { name: 'View Details' }).click();
        await expect(this.page.getByText(uName)).toBeVisible();
        await expect(this.page.getByText(uEmail).last()).toBeVisible(); await expect(this.page.getByText(uNumber)).toBeVisible();
        console.log("All of the Customer Information is Verified Successfully");
    }

    async homePage(uTitle) {

        await this.page.getByTestId("nav-home").click();
        await expect(this.page.getByText(uTitle).first()).toBeVisible();
        console.log("Event Title verified from the Home Page Successfully");

    }
}



module.exports = { EventVerify };





