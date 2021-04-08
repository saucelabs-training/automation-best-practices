# How setup CICD

## 🏋️‍♀️Let's add this code to our CI system.

1. Create a a file in this folder structure `.github/workflows/ci.yml` in the root of your directory
2. Paste in the following configuration

```yml

```
3. Add New repository secrets for the repo

## How to check code coverage

https://create-react-app.dev/docs/running-tests
`npm test -- --coverage`

## Front-end performance

* Use the task tracker application that we build in React JS crash course
* Get the performance metrics by using <a> in the About and Footer components
* Then change those to a Link component
* Then recapture the front-end perf metrics
* The expected result is that with the instant DOM refresh, the latter will be faster