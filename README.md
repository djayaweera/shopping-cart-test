# Shopping-cart-test
# Global Media &amp; Entertainment Group Automation

__Overview:__

* The given test project was designed with cypress framework using Cypress and Javascript. 
* The tests are located in e2e file in a spec.js file and in support folder as custom commands to re-use throughout the scripts.  
      
      cypress/e2e/spec.cy.js
      
      cypress/support

__Pre-requisites:__

Install the latest version of node

__Steps to clone:__

Clone the project
```git clone https://github.com/djayaweera/shopping-cart-test```

__Install dependencies:__
* Go inside the clone directory from terminal, and type npm install
* It will install the dependencies we use within the project.

__Steps to run:__

* To run the test script headlessly

	```npm run cypress:run```

* To open the Cypress Test Runner with the test script loaded

	```npm run cypress:open```
  
 
 __Please find the the URL for the Youtube video here:__
 
 https://youtu.be/JE9D_BR9mW0
  
 __Additional notes__
   * Added more waits to avoid flaky tests while page load, elements loading
   * Please re-run and check the tests if it fails 
 
 * It will check shopping cart total is equal to given value and prompt a message in the command log
 
<img width="618" alt="1" src="https://user-images.githubusercontent.com/88426585/219997601-e568777d-98e4-45c5-8f65-d9dcda904b83.png">


<img width="634" alt="2" src="https://user-images.githubusercontent.com/88426585/219997626-23d782fa-97c3-4d20-93f1-96dea82de4fb.png">
