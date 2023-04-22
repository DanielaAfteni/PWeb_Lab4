# Getting Started with Create React App

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


# Lab 4 - Quiz app

## Story

Imagine, you're a developer at Sunny Entertainment GK, Tokyo. Ni hao. The company is struggling to find customers in Tokyo, so the marketing department proposes to launch a proof-of-concept app for running quizzes. The marketing campaign starts soon and you have to develop the app itself.

The good part is that there is a Quiz API that can be consumed by your application to fetch data about the quizzes.

## Task

1. Pick a frontend framework;
2. Create a web app that has the following functions:
  - it shows a landing page with different quizzes;
  - the user can pick a quiz and play it;
  - after the game has ended, the user can see their score.

3. The app should have attractive UI;
4. Consume [Quiz API](https://late-glitter-4431.fly.dev) to fetch data from backend server.

## Special conditions

You have no restrictions on using third-party packages.

## Grading

Points:

  - view a list of quizzes -- `+1` point
  - view a single quiz -- `+1` point
  - create a user (and storing its ID somewhere) -- `+2` point
  - as a logged user, play a predefined quiz -- `+5` point
    - submit the responses out of the list (multiple choice)
    - show the total score

  - use of your own components - `+1` point.

You can get `+1` point if the app includes a background music player/ sound effects / visual effects (with the condition that on URL change the music continues to play). You can get `+1` point if the app implements some other feature.

## Hints

- If you know a frontend framework - use it!
- If you don't know, use Vue or Nuxt.js.
- Use a CSS library for UI part. You can give a try to Bulma, UIKit, Milligram or Tachyons.
- Use a high-level library to make HTTP requests e.g. axios.
- To track & keep progress in the app, you can use state managers provided by the framework e.g. Redux or Vuex/Pinta.
- Use Postman to test the Quiz API **before** implementing the app itself -- create quizzes, create users, submit responses and so on.
- Keep it simple, commit often, improve gradually.
