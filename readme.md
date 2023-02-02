## tdd in jest and cypress

This is a TDD example project in javascript.

* Stack -- use tdd in jest approach to build a Stack module

* Counter -- use tdd in cypress to build a web counter

#### Test Stack JS using Jest

    * npm run jest-test

#### Code Coverage

    code coverage is included in jest-test with the follow criteria:

        "coverageThreshold": {
            "global": {
                "statements": 100,
                "branches": 100,
                "functions": 100,
                "lines": 100
            }
        }

#### Test Counter App using Cypress

    needs two terminals

    * terminal 1: npm run ui-dev
    * terminal 2: npm run cypress-test

#### Automated Github Actions

There are two github action yaml files in .github/workflows/ folder. They ensure the above tests are passsing. PR will be blocked on any failure.

    * jest-test.yml
    * cypress-test.yml
