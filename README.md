# 🎭 playwright-eventhub-e2e-pom

> End-to-End Event Booking Automation using Playwright with Page Object Model (POM) design pattern. Covers login, event creation, ticket booking, and booking verification flows.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Page Objects](#page-objects)
- [Test Flow](#test-flow)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Author](#author)

---

## 📖 About the Project

This project is a fully automated **End-to-End test suite** for an Event Booking web application built using **Playwright** and the **Page Object Model (POM)** design pattern.

The test suite covers the complete event booking flow including:
- User Login
- Event Creation (Title, Description, Category, City, Venue, Date, Price, Seats)
- Ticket Booking with Customer Details
- Booking Reference Capture & Verification
- Customer Information Verification
- Home Page Event Validation

The application under test: [EventHub - Rahul Shetty Academy](https://eventhub.rahulshettyacademy.com)

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev/) | E2E Test Automation Framework |
| [Node.js](https://nodejs.org/) | JavaScript Runtime |
| Page Object Model (POM) | Design Pattern for Test Architecture |
| JavaScript | Programming Language |

---

## 📁 Project Structure

```
playwright-eventhub-e2e-pom/
│
├── tests/
│   └── MainEvent.spec.js       # Main test spec file
│
├── pageobjects/
│   ├── LoginPage.js            # Login page actions
│   ├── CreateEvent.js          # Create event page actions
│   ├── BookTicket.js           # Ticket booking page actions
│   └── EventVerify.js          # Booking verification actions
│
├── playwright.config.js        # Playwright configuration
├── package.json
└── README.md
```

---

## 📄 Page Objects

### 🔐 LoginPage.js
Handles navigation to the app and user login.
- `goTo()` — navigates to the EventHub login URL
- `logInProcess(uEmail, uPass)` — fills credentials and clicks login

### 🎪 CreateEvent.js
Handles creation of a new event.
- `CreteNewEvent(uTitle, uDes, uTime)` — fills all event details (title, description, category, city, venue, date, price, seats) and submits, then verifies the event title is visible

### 🎫 BookTicket.js
Handles booking tickets for an event.
- `BookEvent(uTitle, uName, uEmail, uNumber)` — navigates to events, clicks the event, increments ticket quantity 4 times, fills customer details and confirms booking

### ✅ EventVerify.js
Handles verification of booking and customer details.
- `VerifyingEvent(uName, uEmail, uNumber)` — captures booking reference, navigates to My Bookings, verifies the reference, clicks View Details and validates all customer information
- `homePage(uTitle)` — navigates to Home and verifies the event title is visible

---

## 🔄 Test Flow

The main test `End to End Event Flow` in `MainEvent.spec.js` follows this sequence:

```
1. 🔐 Login              → Navigate to app and login with credentials
        ↓
2. 🎪 Create Event       → Create a new event with full details
        ↓
3. 🎫 Book Ticket        → Browse event, add 4 tickets, fill customer info
        ↓
4. ✅ Verify Booking     → Capture booking ref, verify in My Bookings page
        ↓
5. 👤 Verify Customer    → Confirm customer name, email and phone in details
        ↓
6. 🏠 Home Page Check    → Verify event title is visible on Home page
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/playwright-eventhub-e2e-pom.git
```

2. Navigate to the project folder:
```bash
cd playwright-eventhub-e2e-pom
```

3. Install dependencies:
```bash
npm install
```

4. Install Playwright browsers:
```bash
npx playwright install
```

---

## ▶️ Running Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/MainEvent.spec.js
```

Run tests in headed mode (see the browser):
```bash
npx playwright test --headed
```

View the HTML test report:
```bash
npx playwright show-report
```

---

## 👨‍💻 Author

Subir Kundo
QA AEngineer
kundosubir@gmail.com

---

## 📝 License

This project is open source and available for learning and practice purposes.

---

> 💡 *Built with ❤️ for learning Playwright and QA Automation best practices.*