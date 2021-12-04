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

* [Automated atomic tests](./automated-atomic-tests/ATOMIC-TESTS.md)
* [Login testing](./login-testing/LOGINS.md)
* [Full coverage testing](./my-react-app/FULL-COVERAGE.md)
* [Visual E2E testing](./my-react-app/docs/VISUAL.md)
* [CICD](./my-react-app/docs/CICD.md)


## ⚙️ Setup

### 1. Install Node 14 LTS
  - Use NVM for this installation by [following instructions](https://github.com/nvm-sh/nvm#install--update-script)
    - Pre-requisites that make the process work
      - Make sure that a `~/.bash_profile` exists. Check with `open -e ~/.bash_profile`. If nothing opens then create with `touch ~/.bash_profile`
      - With VS Code, make sure that your terminal corresponds to the installation location of NVM. For example, if NVM was installed to `~/.bash_profile` then make sure that you are using the `bash` terminal and not `zsh` or another one
    -  It should be just a single command to run in our terminal
    -  **!Don't forget to restart your terminal!**
  - After installation, confirm install was correct by running `nvm` and seeing an output
  - Intall Node 14 with `nvm install 14` 
  
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
  
  * Confirm node installation with `node --version` and seeing `v14.16.1` or similar
  * Confirm NVM is set to 14 for default by running the following commands:

```bash
nvm list #will show all versions
nvm use 14 #to use 14
nvm alias default 14.16.x #to set it to the default
```



### 2.Clone and fork the repo
1. Sign up for a free [Github account](https://github.com/)
2. Fork this respository
 * Make sure you are logged into Github
 * click the Fork in the upper right of the Github.
3. Clone your fork of the repository to your machine. Must have [Git installed](https://git-scm.com/downloads)

```bash
git clone URL_OF_YOUR_FORK
```
4. **Navigate to the directory of where you cloned your repo**

`cd YOUR_FORK_DIR/automation-best-practices`

### 3.Install the app
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
**Don't worry about fixing any warnings that may appear during `npm install`**

Once the app is running, kill the server by executing `Ctrl + C` in command line. We don't need the app running right now.

### 4.Have an IDE installed that can handle NodeJS (We will use [VSCode](https://code.visualstudio.com/Download))

#### ✅👏Congratulations, you're 90% ready!

### 5.Fork, clone, install the cypress-examples repo

We will have a 2nd repo from which we work from only for login testing.

1. Fork https://github.com/nadvolod/cypress-example-recipes
2. Clone this repo to another directory (we will open it as a separate project later in the workshop)
3. Install everything


```bash
cd cypress-example-recipes
npm i
```

### 5.Sign up for a free [Sauce account](https://saucelabs.com/sign-up)

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
