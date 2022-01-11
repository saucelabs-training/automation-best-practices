# CICD

## 🏋️‍♀️Let's add this code to our CI system.

1. Create a `charity.ci.yml` file in this folder structure `.github/workflows/` in the root of your directory
2. Paste in the following configuration

```yml
name: Testing for Charity

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: Install dependencies 📦
      #Using npm ci is generally faster than running npm install
      run: |
        cd testing-for-charity/my-react-app
        npm ci
    - name: Build the app 🏗
      run: |
        cd testing-for-charity/my-react-app
        npm run build
    # If we had more time, at this point we can actually deploy our app
    # to a staging server and then run functional tests
    - name: Start the app 📤
      run: |
        cd testing-for-charity/my-react-app
        npm start &
        npx wait-on --timeout 60000
    - name: Run functional UI tests 🖥
      run: |
        cd testing-for-charity/my-react-app 
        npm run cy:ci
```
3. Add New repository secrets for the repo

![adding secrets](../../../graphics/secrets.png)

4. `git push` and watch it run

## 🧪Current Test Coverage

[Look here](TEST-COVERAGE.md)

## 📝Summary

✅We can use Github Workflows for free and easy continuous integration pipelines

## ⏭️[Let's add visual tests](./VISUAL.md)
