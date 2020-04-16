## What have we built: 
A command line utility for measuring website performance and running UI functionality test on nodejs

## Key parameters that determine the performance of the website:
1. SEO performance

2. Response time - time for first contentful paint, first meaningful paint, speed index, first CPU idle, time to interactive, max potential first input display

3. Accessibility like ARIA, navigation and contrast

4. Best practices like using HTTPS or HTTPS/2 for all its resources.

5. Functionality of UI 


## Tools for tests:
Parameters 1-4: lighthouse js

Parameter 5: testcafe js

## What can this test framework do
1. Lets you evaluate performance of any website and displays results in a html file

2. Lets you evaluate UI functionality of any website and display results in a html file

3. Lets you write your UI specific tests for UI functionality evaluation

4. Captures screenshots and videos in the situation where a UI functionality test failed

5. Allows you to configure default browser, headless mode and performance test url through command line and lets you reset the values to defaults using command line

6. This framework conducts performance test on a default URL but allows you to run performance test through command line while specifying the website url if tests are not to be performed on the default website url.


## Instructions:
1. The project is built on nodejs. Please install nodejs and npm if not already installed. https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

   Also, install ffmpeg package from: https://ffmpeg.org/download.html

   This is required to record screenshots and videos in ui functionality tests.

2. Clone this repository.

3. Navigate to the directory and run the following commands
   ```
   npm install
   npm update
   npm link
   ```
4. For the purpose of hackathon, three sample tests are included. One sample performance test and two sample UI functionality tests are there on mantra labs website.

5. To execute the performance test, run the following command:

   ```npm run test:performance```
   
   This test will carry out a lighthouse performance test on mantra labs website and report will be published as an HTML file displayed immediately after test gets over.
   
6. To execute the UI functionality test, run the following command:

   ```npm run test:ui```
   
   This test will carry out a testcafe test to identify two things - if a robot can solve the recaptcha on submit contact details section on the page, and if the mantra labs blog search can fuzzy search the articles. report will be published as an HTML file displayed immediately after test gets over.
   
7. To execute both the tests one after another, run the following command 

```npm run test:all```

8. **Defaults:**

a) URL for performance test: http://mantralabsglobal.com

b) Browser for UI functionality test: chrome

c) Headless mode for UI functionality test: no headless

9. **Customization:**

a) To set a new default URL for performance test, run the following command

   ```mantra-hackathon --ptUrl=<URL>```
   
b) To set a new default browser for UI functionality test, run the following 

   ```mantra-hackathon --uibrowser=<Browser name>```
   
   Available options: chrome / firefox / safari
   
c) To set a new default headless mode for UI functionality test, run the following command

```mantra-hackathon --uiheadless=<headless mode>```

Flags in (a), (b) and (c) can be placed together in a single command line instruction

Available option: no / yes

d) To set the defaults back to performance test url = http://mantralabsglobal.com ; ui functionality browser = chrome ; ui functionality headless = no, run the following command

```mantra-hackathon --reset=default```

10. Please note that the base URL for UI functionality test is not customizable because it needs HTML structure to be taken care and just a URL is not complete description of the test structure.

11. To run the performance test while providing the URL in the command line, run the following command.

```npm run test:performance --url=<URL>```

This will not make any change to the default value of performance test URL

12. **Framework structure:**

(a) ```test-suites``` folder contains javascript files which contains tests.

(b) ```test-results/reports/performance-test``` folder contains html files having performance test reports.

(c) ```test-results/reports/ui-test``` folder contains subfolders with html files having ui test reports.

(d) ```test-results/outputs/screenshots``` contains screenshots of the webpage in the conditions ui-tests failed.

(e) ```test-results/outputs/videos``` contains videos of the test on webpage in the conditions ui-tests failed.


## What can this test can’t framework do as of now (But can do if developed as a full-fledged framework)

1.Include API tests

2.Command line utility to create new tests with a boilerplate

3.Command line utility to decide if report shall be displayed immediately after test is executed

4.Command line utility to configure browser and headless mode 

5.Command line utility to configure situations in which screenshots and videos shall be recorded

6.Naming of test results on test name and a command line utility for that

7.Concurrent tests, screenshots comparison and test retrials

8.Integrate AI based QA tests

## Please report a bug or request a new feature whenever needed.
