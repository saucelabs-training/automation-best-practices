# Visual Component Testing

## 🧠You will learn


## 🧪Current Test Coverage

| Expected Behavior  | Tested? | Test Type  | Technologies  |
|---|---|---|---|
| Application renders  | ✅ | Functional UI | Cypress |
| Learn React link goes to correct location | ✅ | Functional UI | Cypress |
| Learn React link opens in new tab  | ✅ | Functional UI | Cypress |
| App looks as expected on Chrome + Safari on most popular resolution  | 🙅‍♂️ |   |   |
| App looks as expected on iPhone 12, 12 Pro Max  | 🙅‍♂️ |   |   |

---

## ❓How do we check to make sure that the app looks as expected on web and mobile?

---

### Unit tests don't have eyeballs

A unit test isolates a module and then verifies its behavior. It supplies inputs (props, state, etc.) and compares the output to an expected result. Unit tests are desirable because testing modules in isolation makes it easier to cover edge cases and pinpoint the source of failures.

The core issue is that much of a UI's inherent complexity is visual — the specifics of how generated HTML and CSS render on the user's screen.

[Storybook visual testing](https://storybook.js.org/tutorials/visual-testing-handbook/react/en/introduction/)

## What about snapshot tests?

Snapshot tests provide an alternate approach to verifying UI appearance. They render the component then capture the generated DOM as a "baseline".

In practice, DOM snapshots are awkward because it's tricky to determine how a UI renders by evaluating an HTML blob.

Snapshot tests suffer from the same brittleness as other automated UI tests. Any changes to the internal workings of a component require the test to be updated, regardless of whether the component's rendered output changed.

### Visual testing is made for UIs

Visual tests are designed to catch changes in UI appearance. You use a component explorer like Storybook to isolate UI components, mock their variations, and save the supported test cases as "stories".

## Visual testing

Visual testing workflow
In practice, visual testing uses Storybook to “visually” test a component across a set of defined test states. Visual tests share the same setup, execute, and teardown steps as any other type of testing, but the verification step falls to the user.

```
test do
  setup
  execute 👈 Storybook renders stories
  verify 👈 you look at stories
  teardown
end
```

## How to write visual test cases

1. `npx sb init`
2. `npm run storybook`