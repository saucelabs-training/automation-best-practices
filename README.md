# automation-best-practices
This is an Automation Best Practices workshop designed to teach testing through cross-functional automation

# ⚙️ Pre-requisites

* Install [Node 14 LTS](https://nodejs.org/en/)
* Have an IDE installed that can handle NodeJS (We will use VSCode)
* Sign up for a free [Sauce account](https://saucelabs.com/sign-up)
* Sign up for a free [Screener account](https://screener.io/)
* Sign up for a free [Github account](https://github.com/)

```bash
cd my-react-app
npm install
npm run start
```

**Expected Output:**

Your output should look similar to this
```
Compiled successfully!

You can now view my-react-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.20.10.2:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

#### Set Your Sauce Labs Credentials
1. Copy your Sauce Labs **username** and **accessKey** in the [User Settings](https://app.saucelabs.com/user-settings) section of the [Sauce Labs Dashboard](https://app.saucelabs.com/dashboard/builds).
2. Open a Terminal window (command prompt for Windows) and set your Sauce Labs Environment variables:   
   ###### Mac OSX:
   ```
   $ export SAUCE_USERNAME="username"
   $ export SAUCE_ACCESS_KEY="accessKey"
   ```
   ###### Windows:
   ```
   > set SAUCE_USERNAME="username"
   > set SAUCE_ACCESS_KEY="accessKey"
   ```
   > To set an environment variables permanently in Windows, you must append it to the `PATH` variable.
   
   > Go to **Control Panel > System > Windows version > Advanced System Settings > Environment Variables > System Variables > Edit > New**
   
   > Then set the "Name" and "Value" for each variable
   
9. Test the environment variables
    ###### Mac OSX:
    ```
    $ echo $SAUCE_USERNAME
    $ echo $SAUCE_ACCESS_KEY
    ```
    > ***WARNING FOR UNIX USERS!***:
    > If you have problems setting your environment variables, run the following commands in your terminal:
    ```
    $ launchctl setenv SAUCE_USERNAME $SAUCE_USERNAME
    $ launchctl setenv SAUCE_ACCESS_KEY $SAUCE_ACCESS_KEY
    ```
    ###### Windows:
    ```
    > echo %SAUCE_USERNAME%
    > echo %SAUCE_ACCESS_KEY%
    ```



## TOC

* [Automated atomic tests](./exercises/README.md)
* [Login testing](./exercises/cypress/integration/login-testing/README.md)
* [Full Coverage Testing](./my-react-app/README.md)
* [Full Coverage Testing](./my-react-app/VISUAL.md)

## What you will learn

## Technologies you will use

1. ReactJS
2. Cypress
3. WebdriverIO
4. React testing library
5. Jest
6. Screener visual E2E testing

## Key

💡 this is a tip
🏋️‍♀️ this is an exercise for you to do
❓ this is a question for us to think and talk about