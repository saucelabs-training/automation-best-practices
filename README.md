# automation best practices workshop

In this automation best practices workshop you will learn the latest and greatest tools and techniques to drastically improve your testing!

We will focus on a holistic approach of testing front-end and back-end, web and APIs, functional testing, component testing, and many other things in between 😁

## 🧠You will learn

✅What is an automated atomic test 

✅How to code automated atomic tests

✅How to login without a UI using a HTML web forms 

✅How to login without a UI using JWT

✅How to write a component test 

✅How to add a test id to our web app

✅How to correctly test a link and a tab

✅How to replace e2e tests with component tests

✅visual e2e tests

✅visual cross-browser tests

✅CICD with Github Actions

## 🔧Technologies you will use

1. ReactJS
2. Cypress
3. WebdriverIO
4. React testing library
5. Jest
6. Screener visual E2E testing
7. Sauce Labs
8. Github Actions

## Table Of Contents

* [Automated atomic tests](./automated-atomic-tests/README.md)
* [Login testing](./login-testing/README.md)
* [Full coverage testing](./my-react-app/README.md)
* [Visual E2E testing](./my-react-app/docs/VISUAL.md)
* [CICD](./my-react-app/docs/CICD.md)


## ⚙️ Setup

### 1. Install Node 14 LTS
  * Use NVM for this installation by [following instructions](https://github.com/nvm-sh/nvm#install--update-script)
  * It should be just a single command to run in our terminal
  * After installation, confirm install was correct by runnin `nvm` and seeing an output
  * Intall Node 14 with `nvm install 14`
  
  Here's what the output would look like:
  ```
  Downloading and installing node v14.16.1...
  Downloading https://nodejs.org/dist/v14.16.1/node-v14.16.1-darwin-x64.tar.xz...
  ######################################################################### 100.0%
  Computing checksum with shasum -a 256
  Checksums matched!
  Now using node v14.16.1 (npm v6.14.12)
  Creating default alias: default -> 14 (-> v14.16.1)
  ```
  * Finally, confirm node installation with `node --version` and seeing `v14.16.1` or similar



### 2.Have an IDE installed that can handle NodeJS (We will use [VSCode](https://code.visualstudio.com/Download))
### 3.Sign up for a free [Sauce account](https://saucelabs.com/sign-up)
### 4.Sign up for a free [Github account](https://github.com/)

### 5.Install the app
```bash
cd my-react-app
npm install
npm run start
```

Expected Output:

Your output should look similar to this
```
Compiled successfully!

You can now view my-react-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.20.10.2:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### 6.Set Your Sauce Labs Credentials
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





## Key

💡 this is a tip

🏋️‍♀️ this is an exercise for you to do

❓ this is a question for us to think and talk about. Try not to scroll beyond this question before we discuss
