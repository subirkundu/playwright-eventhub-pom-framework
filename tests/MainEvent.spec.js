const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
const { CreateEvent } = require('../pageobjects/CreateEvent');
const { BookTicket } = require('../pageobjects/BookTicket');
const { EventVerify } = require('../pageobjects/EventVerify');

test('End to End Event Flow', async ({ page }) => {

    const uEmail = "testgmail@yopmail.com";
    const uPass = "Nextgen1234##";
    const uTitle = "Playwright Automation";
    const uDes = "We are creating this event for the End to End flow of Event by Playwright";
    const uTime = "2030-12-30T16:55";
    const uName = "Mr. J";
    const uNumber = "+91 98765 43210";


    // Login Process
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.logInProcess(uEmail, uPass);

    //create event
    const EventCreatePage = new CreateEvent(page);
    await EventCreatePage.CreteNewEvent(uTitle, uDes, uTime);


    //Book Event

    const bookEvents = new BookTicket(page);
    await bookEvents.BookEvent(uTitle, uName, uEmail, uNumber);


    // Event Verify

    const verifyEvents = new EventVerify(page);
    await verifyEvents.VerifyingEvent(uName, uEmail, uNumber);
    await verifyEvents.homePage(uTitle);




});