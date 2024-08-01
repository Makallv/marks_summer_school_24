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

Before user runs tests user should open up fixtures directory and rename `userTemplate` folder to `user` folder.
In that folder user shall find `user.json` file and in that file he or she should find `"username": "",` and `"password": ""`.
Between double quotes user should add his or hers created profile for web store to execute the full flow test.
After wards to see the report, you will need to execute tests in headless mode.

### Report cleanup

After running tests and checking the report, user might want to clean up report folder so that after tests it only generates newest reports.
Use command: `npm run cleanup`
command will delete the report folder, and make it so much nicer if user wants to redo the tests.

### Code formating

Command to execute `Prettier` script to format files:
`npm run format`

### Cypress usage

To run the test runner use command: `npm run cypress-open`
To execute tests in headless mode use command: `npm run cypress-run`
