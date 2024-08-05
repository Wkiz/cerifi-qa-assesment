# Alexis Erazo Aristizabal

## QA Automation Assessment

This is an automation BDD framework, that tests the [saucedemo.com](https://www.saucedemo.com/) page. 

## Used tools
-  Cypress.
-  Cucumber.
-  Page Object Model (POM).
-  JavaScript.

## Setup and run instructions

1. **Clone Repository:** Clone the repository, using `git clone` in Terminal/command prompt.
2. **Install all Dependencies:** Install all the dependencies with `npm install`
3. **Using Cypress GUI:** If you want to run tests with Cypress GUI, use `npm run cypress:open` to open the Cypress GUI and run tests .feature per .feature.
4. **Using Command Prompt:** Use `npm run cypress:run-all` to run all tests headless.

## Justification of Design Choices

### Page Object Model (POM)

- **Maintainability:**

    - **Centralized Maintenance:** All the locators and methods for interacting with a page are centralized in one place. If the UI changes, only the page object class needs to be updated.
    - **Reduced Code Duplication:** Common actions and elements are defined once in the page object class and reused across multiple tests, reducing redundancy.
    
- **Readability and Clarity:**

    - **Clear Test Scripts:** Tests are more readable and concise since they call methods from the page object classes instead of interacting directly with the UI elements.
    - **Logical Organization:** UI elements and their interactions are logically organized, mirroring the structure of the application.

- **Reusability:**

    - **Reusable Components:** Page object classes can be reused across different test cases, enhancing code reuse and reducing the effort required to write new tests.
    
- **Separation of Concerns:**

    - **Test Logic and UI Separation:** POM separates the test logic from the UI structure. Test scripts focus on the test logic, while the page objects handle the UI interactions.
    - **Encapsulation:** Page objects encapsulate the details of the UI, providing a clear interface for test scripts to interact with.
    
- **Scalability:**

    - **Scalable Framework:** The modular nature of POM makes it easy to scale the test automation framework. New pages or components can be added without impacting existing tests.
    
- **Improved Collaboration:**

    - **Team Collaboration:** By abstracting the UI interactions, POM allows test developers to focus on writing test logic, while developers familiar with the application’s UI can create and maintain the page objects.

### Framework Adaptability for Future Needs
- **Scalability:** The combination of Cypress and POM allows the framework to scale easily, with new pages and components added without impacting existing tests.
- **Extensibility:** Modular JavaScript and POM enable easy integration of new libraries or tools, such as performance, accessibility, or visual testing plugins.
- **Maintainability:** Using Cucumber for natural language test definitions and POM for UI logic structuring ensures easy maintenance and updates.
- **Collaboration:** Cucumber enhances collaboration between technical and non-technical teams by translating requirements directly into tests.
- **Continuous Automation:** Cypress supports CI/CD tools, enabling automatic test integration and execution with each code change, ensuring rapid error detection and continuous feedback.
