# Lab8_Starter

Anisha Atwal

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

A. Within a Github action that runs whenever code is pushed

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No because there are many moving parts and multiple individual components since the "message" feature allows the user to write and send to another user

1. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes because there is only one individual component since the "max message length" feature is only checking the length of what the user is typing and ensuring it is not more than 80 characters.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

It will run the tests without a browser UI

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

`await page.click('header > img')`

