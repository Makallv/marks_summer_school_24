# Marks summer school 24

TDL Summer School 2024

# About project

This project is written in JavaScript programming language and project uses:

- NodeJS
- NPM
- Prettier
- faker-js
- Cypress
- mochawesome

The project is about learning cypress in a real project setting

## Installation

`git clone https://github.com/Makallv/marks_summer_school_24.git`

`npm install` to install all the packages in package.json

## Project usage

Before executing the tests, the user should update the `cypress.config.js` file with his or her login (`username`, `password`).
The username should be the email, that the user used in signing up, and the password should follow from that as well
Afterwards, to see the report, you must execute tests in headless mode.

### Report cleanup

After running tests and checking the report, the user might want to clean up the report folder so that after tests it only generates the newest reports.
Use the command: `npm run cleanup`
Command will delete the report folder, and make it so much nicer if the user wants to redo the tests.

### Code formating

Command to execute `Prettier` script to format files:
`npm run format`

### Cypress usage

To run the test runner use command: `npm run cypress-open`
To execute tests in headless mode use the command: `npm run cypress-run`
