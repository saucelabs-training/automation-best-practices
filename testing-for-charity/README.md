# automation best practices workshop

In this automation best practices workshop you will learn the latest and greatest tools and techniques to drastically improve your testing!

We will focus on a holistic approach of testing front-end and back-end, web and APIs, functional testing, component testing, and many other things in between 😁

## testing for charity

![Testing for charity](../graphics/testing-charity.png)

This workshop serves 2 purposes:

1. For me to give back to the testing world and help us all upskill 🚀
2. For us all to help a greater cause than ourselves 🌍

### [About Black Girls CODE](https://www.blackgirlscode.com/about-us/)

We build pathways for young women of color to embrace the current tech marketplace as builders and creators by introducing them to skills in computer programming and technology.

Radical action is needed if we are to close the opportunity gap for Black women and girls. We lead a global movement to establish equal representation in the tech sector. Black Girls CODE is devoted to showing the world that Black girls can code and do so much more. Together, we are creating stronger economies and more equitable societies—ultimately realizing the true potential of democracy through diversity and inclusion.

👇👇👇

[Please donate whatever you feel appropriate.](https://www.gofundme.com/f/testing-for-charity) 100% of the donations go to the cause.

## 🧠You will learn

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

* [Full coverage testing](./my-react-app/FULL-COVERAGE.md)
* [Visual E2E testing](./my-react-app/docs/VISUAL.md)
* [CICD](./my-react-app/docs/CICD.md)

## About Me


- 🔭 I’m the founder of [Ultimate QA](https://ultimateqa.com/)
- 🏢 I’m a Sr Solutions Architect at Sauce Labs
- 🌱 I’m currently working on [Sauce Bindings](https://github.com/saucelabs/sauce_bindings)
- 💬 Ask me about environmentalism, veganism, test automation, and fitness
- 😄 Pronouns: he/him
- ⚡ Fun fact: I'm a vegan that's super pasionate about saving the planet, saving animals, and helping underpriveleged communities
- 📫 Follow me for testing and dev training
  - [Youtube](https://youtube.com/ultimateqa)
  - [LinkedIn](https://www.linkedin.com/in/nikolayadvolodkin/)
  - [Twitter](https://twitter.com/home)

## ⚙️ Setup

### 1. Install Node 14 LTS
1.  Use NVM for this installation by [following instructions](https://github.com/nvm-sh/nvm#install--update-script)
      * It should be just a single command to run in our terminal
        * **!Don't forget to restart your terminal!**
2. After installation, confirm install with `nvm --version`
3. Intall Node 14 with `nvm install 14` 
  
  <br/>
  <details>
    <summary>
      <strong>Click here</strong> to see an example output.
    </summary>

        Downloading and installing node v14.16.1...
        Downloading https://nodejs.org/dist/v14.16.1/node-v14.16.1-darwin-x64.tar.xz...
        ######################################################################### 100.0%
        Computing checksum with shasum -a 256
        Checksums matched!
        Now using node v14.16.1 (npm v6.14.12)
        Creating default alias: default -> 14 (-> v14.16.1)

  </details>
  <br/><br/>

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

`cd YOUR_FORK_DIR/automation-best-practices/testing-for-charity`

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
