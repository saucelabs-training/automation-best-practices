# Testing Logins Efficiently

## 🧠You will learn:

✅How to login without a UI using a HTML web forms 

✅How to login without a UI using JWT

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

### ❓What tests can we create to test this app❓

### 🏋️‍♀️Exercise

Open `exercise.spec.js` and
1. Create a test that can visit `/dashboard` without a UI login
2. Create a test that can visit `/users without` a UI login

### Advantages/Disadvantages
✅Fast

✅Reliable

✖️Need to learn how your API works (maybe a good thing)

## JSON Web Token (JWT)

How does the [JWT](https://jwt.io/introduction) work?
1. Form fires `handleSubmit()`
2. Reads form values
3. Fires a web request for authentication

```js
//LoginPage.vue
if (username && password) {
    dispatch('authentication/login', { username, password });
}
```
4. Save JWT token to local storage. No cookies. 

```js
//user.service.js
.then((user) => {
// login successful if there's a jwt token in the response
if (user.token) {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('user', JSON.stringify(user))
}
```
![tokenAdded](./images/TokenAdded.png )

### Setup

```bash
cd examples/logging-in__jwt/
#start backend
npm run start:server
#start front-end
npm run start:app
```

### The SUT

*Authenticate User:* 


POST to http://localhost:4000/users/authenticate

*Get list of users:*

 GET to http://localhost:4000/users with a bearer token as auth

Explore the application at `http://localhost:8081/` and notice the behavior of authentication

### ❓What tests can we create to test this app❓

| Test  | System Level  | Positive/Negative  |
|---|---|---|
| Login with valid credentials  | UI  | Positive  |
| Login with invalid credentials  |   | Negative  |
|   |   |   |

### 🏋️‍♀️Atomic login tests (20min)

Open `exercise.spec.js`
Your challenge is to create 2 tests:
1. Create a test to login with a JWT and assert that user is successfully logged in
2. Assert that a user can successfully log out. You're not allowed to login through the UI

## 📝Summary

✅Pretty much all authentication can be bypassed without using a UI

✅Authenticating using non-UI methods is more stable and efficient

✅Two types of authentication are: HTML Web forms + JWT

## 📔More Resources

There are numerous other ways that we can authenticate:
1. SSO
2. Using app code
3. XHR web forms
4. CSRF tokens
5. Basic auth

[Learn more by looking at the logging-in examples](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples)