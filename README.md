# qa_challenge
qa automation challenge as part of a test to be hired by a company

## How to run
- Execute npm install
- Execute npx cypress open
- It must be run on Electron browser
  
## What is the application
The application in attachment provides an overview per purchase order/store/item quantity.
In this application the manager can have a clear notion about the total quantity of items in a store per purchase order

## What is the required for the automated tests
1. Access the application with credentials used when creating the workspace. Credentials should not be hard-coded
2. Save values in chart in memory
3. Access table and change the quantity of order 10 to 20. Verify table data is updated and chart is updated
4. Access table and change the location of order 10 to Deli. Verify table data is updated and chart is updated.

### Developed using
* [Cypress 13.6.6](https://www.cypress.io/) - The framework used
