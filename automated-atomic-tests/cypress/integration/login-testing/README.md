# Testing Logins Efficiently

## HTML Web Form

```bash
git clone https://github.com/nadvolod/cypress-example-recipes
npm install
cd logging-in__html-web-forms/
npm run dev
```

Our simple web app is protected by a web form

1. Try to open the URL `http://localhost:7077/`
2. Try to login with valid credentials `jane.lane` and `password123`. Pay attention to the requests and behavior of the application
3. Also try to login with invalid credentials.

### ❓What tests can we create to test functionality❓

### 🏋️‍♀️Exercise

Open `exercise.spec.js` and
1. Create a test that can visit `/dashboard` without a UI login
2. Create a test that can visit `/users without` a UI login

### Advantages/Disadvantages
✅Fast

✅Reliable

✖️Need to learn how your API works (maybe a good thing)