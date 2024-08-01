# Marks summer school 24

TDL Summer School 2024

# About project

This project is written in JavaScript programming language and project uses:
* NodeJS
* NPM
* Prettier
* faker-js
* Cypress

The project is about learning cypress in a real project setting

## Installation

`git clone https://github.com/Makallv/marks_summer_school_24.git`

`npm install` to install all the packages in package.json

## Project usage
Before user runs tests user should open up fixtures directory and rename `userTemplate` folder to `user` folder.
In that folder user shall find `user.json` file and in that file he or she should find `"username": "",` and `"password": ""`.
Between double quotes user should add his or hers created profile for web store to execute the full flow test. 

### Code formating

Command to execute `Prettier` script to format files:
`npm run format`

### Cypress usage

To run the test runner use command: `npm run cypress-open`
To execute tests in headless mode use command: `npm run cypress-run`