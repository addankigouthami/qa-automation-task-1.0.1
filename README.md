# Charge Point Installation App

App to support electricians in setting up a new charge point infrastructure.

The app allows the electricians to inform us about all the installed charge points, using their serial numbers.

The following functionalities are available:
- Visualize list of installed charge points 
- Adding a new charge point using serial number
- Remove a charge point from the installation

The app is composed of 2 components:
- Web application
- REST API

In order to run the app, you need to have nodejs installed.

To run it, execute in the command line:

```bash
$ npm install
$ npm start
```

The purpose of this task is to create some simple tests for automation. 

We would like you to implement the test using foloowing tools. Please choose the one that you prefer.
1. Playwright
2. Cypress

Test cases should be covered.
1. Add new serial number and verify new serial number is added.
2. Delete a serial number and verify that serial number is deleted.

Please apply the best practice and design pattern when you setup the framework / implement the test. This part is more important than the test script to cover the test cases mentioned above.