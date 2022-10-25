# RESTy

## Author: 
> Stephen Clemmer
___
## Problem Domain
> RESTy is an API testing tool that can be run in any browser, allowing a user to easily interact with APIs in a familiar interface.

## Links and Resources
TBD: ci/cd (GitHub Actions)
TBD: This application has not yet been required to have been deployed
TBD: This application has not yet been required to have been deployed

## Core Requirements and Functionality

### Simple, intuitive user interface

> **A form where a user:**

- Enters a REST API Endpoint (URI)
- Selects the REST Method to use (get, post, put, delete)
- For put and post, allow the user to enter JSON to be used as the body for the request
- A button to initiate the request

> **An output section which:**

- Displays a spinner to indicate a request is in process
- Once a request is complete:
  - Hide the spinner
  - Display a well formatted view of the API response in 2 sections
    - Headers
    - Body

> **A history section which:**

- Shows a list of all unique, successful requests
- Allows a user to click or select one to re-populate the form so they can repeat the request


## UML
![RESTy UML](./assets/RESTy%20UML.png)

## Technical Requirements

>The application will be created with the following overall architecture and methodologies

- React
- ES6 Classes
- Shared Component State
- Local Storage for storing request history
- Superagent or Axios for performing API Requests
- SASS for styling
  - Global Theme
  - Component specific CSS where possible
- Test Driven Development, using Jest
  - Tests will be runnable locally
- Deployment to GitHub Pages using an Action

## Setup
**.env requirements (where applicable)**

## PORT
> 3000

## DATABASE_URL 
- TBD: URL to the running Postgres instance/db

## How to initialize/run your application (where applicable)
> Load from github and initialize in the CLI using 'npm start'.

- TBD: How to use your library (where applicable)
- TBD: Features / Routes

Feature One: Details of feature
GET : /hello - specific route to hit

## Tests

- TBD: At the time of this assigment tests are specifically not required
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc

## Application Structure

- ├── .gitignore
- ├── .eslintrc.json
- ├── node_modules
- ├── __tests__
- │   ├── app.test.js
- │   ├── footer.test.js
- │   ├── form.test.js
- │   ├── header.test.js
- │   ├── history.test.js
- │   └── results.test.js
- ├── public
- |   └── index.html
- ├── src
- │   ├── index.js
- │   ├── app.js
- │   ├── app.scss
- │   ├── components
- │   │   ├── foooter
- │   │   │   └── footer.jsx
- │   │   │   └── footer.scss
- │   │   ├── form
- │   │   │   └── form.jsx
- │   │   │   └── form.scss
- │   │   ├── history
- │   │   │   └── history.jsx
- │   │   │   └── history.scss
- │   │   ├── results
- │   │   │   └── results.jsx
- │   │   │   └── results.scss
- │   │   ├── header
- │   │   │   └── header.jsx
- │   │   │   └── header.scss
- ├── .gitignore
- │   package-lock.json
- │   package.json
- └── README.md

___
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
