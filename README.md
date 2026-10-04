# JSONPlaceholder API Automation

## 📌 Project Overview

This project contains an **API automation framework using Playwright and JavaScript** for testing REST APIs provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

The framework validates API functionality, HTTP status codes, response data, request/response structure, and negative scenarios.

The project is designed using a **reusable and maintainable framework structure** so that API tests can be easily extended for additional endpoints.

---

## 🛠️ Technology Stack

* **Automation Tool:** Playwright
* **Programming Language:** JavaScript
* **API Type:** REST API
* **Test Runner:** Playwright Test
* **Assertion Library:** Playwright Assertions
* **Package Manager:** npm
* **Reporting:** Playwright HTML Report
* **Version Control:** Git / GitHub

---

## 🌐 Application Under Test

**JSONPlaceholder**

Base URL:

https://jsonplaceholder.typicode.com/

JSONPlaceholder is a free fake REST API used for testing and prototyping.

---

---

## 🔗 APIs Covered

### 1. GET Post

```http
GET /posts/1
```

Validations:

* Status code is `200`
* Response contains post ID
* Response contains user ID
* Response contains title
* Response contains body
* Validate response data

---

### 2. GET All Posts

```http
GET /posts
```

Validations:

* Status code is `200`
* Response is an array
* Response contains multiple posts
* Validate required fields

---

### 3. POST Create Post

```http
POST /posts
```

Sample request:

```json
{
  "title": "API Automation Test",
  "body": "Testing POST API using Playwright",
  "userId": 1
}
```

Validations:

* Status code is `201`
* Response contains created data
* Validate title
* Validate body
* Validate userId
* Validate generated ID

---

### 4. PUT Update Post

```http
PUT /posts/1
```

Sample request:

```json
{
  "id": 1,
  "title": "Updated API Test",
  "body": "Updated post using PUT request",
  "userId": 1
}
```

Validations:

* Status code is `200`
* Response contains updated data
* Validate updated title
* Validate updated body
* Validate userId

---

### 5. PATCH Update Post

```http
PATCH /posts/1
```

Sample request:

```json
{
  "title": "Partially Updated Title"
}
```

Validations:

* Status code is `200`
* Updated field is returned correctly
* Other response fields remain available

---

### 6. DELETE Post

```http
DELETE /posts/1
```

Validations:

* Status code is `200`
* Response is successfully returned
* Validate delete operation

---

### 7. GET Users

```http
GET /users
```

Validations:

* Status code is `200`
* Response is an array
* Validate user information
* Validate required user fields

---

### 8. GET Comments

```http
GET /comments
```

Validations:

* Status code is `200`
* Response is an array
* Validate comment structure
* Validate required fields

---

## ❌ Negative API Testing

Negative scenarios are included to validate how the API behaves with invalid or unexpected requests.

Examples:

* Invalid endpoint
* Non-existing resource ID
* Invalid request data
* Missing required fields
* Invalid HTTP method
* Invalid resource

Example:

```http
GET /posts/999999
```

The response is validated according to the behavior returned by the API.

---

## ⚙️ Framework Configuration

The Playwright configuration is maintained in:

```text
playwright.config.js
```

The configuration contains:

* API base URL
* Test directory
* Timeout configuration
* Reporter configuration
* Execution settings

Example:

```javascript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,

  use: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  },

  reporter: [
    ['html'],
    ['list']
  ]
});
```

---

## 📦 Installation

### Step 1: Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### Step 2: Navigate to the project

```bash
cd JSONPlaceholder-API-Automation
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Running the Tests

### Run all API tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/api/posts/get-post.spec.js
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test

```bash
npx playwright test -g "Verify successful GET post request"
```

---

## 📊 Test Report

After execution, generate/open the Playwright HTML report using:

```bash
npx playwright show-report
```

The report provides:

* Passed tests
* Failed tests
* Execution duration
* Test details
* Error information
* Screenshots/traces where configured

---

## 🧪 Example API Test

Example GET API test:

```javascript
import { test, expect } from '@playwright/test';

test('Verify successful GET post request', async ({ request }) => {

  const response = await request.get('/posts/1');

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.id).toBe(1);
  expect(responseBody).toHaveProperty('userId');
  expect(responseBody).toHaveProperty('title');
  expect(responseBody).toHaveProperty('body');
});
```

---

## 🔍 API Validation Strategy

The framework validates APIs at multiple levels.

### Status Code Validation

Examples:

```javascript
expect(response.status()).toBe(200);
```

```javascript
expect(response.status()).toBe(201);
```

### Response Body Validation

```javascript
expect(responseBody).toHaveProperty('id');
expect(responseBody).toHaveProperty('title');
```

### Data Validation

```javascript
expect(responseBody.id).toBe(1);
```

### Response Structure Validation

```javascript
expect(Array.isArray(responseBody)).toBeTruthy();
```

---

## 🔄 HTTP Methods Covered

| Method | Purpose               | Example    |
| ------ | --------------------- | ---------- |
| GET    | Retrieve data         | `/posts/1` |
| POST   | Create data           | `/posts`   |
| PUT    | Replace/update data   | `/posts/1` |
| PATCH  | Partially update data | `/posts/1` |
| DELETE | Delete data           | `/posts/1` |

---

## 🏗️ Framework Design

The framework follows a reusable structure to separate:

* Test cases
* Test data
* Utility functions
* Configuration

This makes the framework easier to maintain and extend.

### Benefits

* Reusable API utilities
* Easy test maintenance
* Clear test organization
* Data-driven testing support
* Centralized configuration
* Easy CI/CD integration
* HTML reporting
* Easy debugging

---

## 🔐 Test Data Management

Test data is maintained separately from test scripts where applicable.

Example:

```javascript
export const postData = {
  title: 'API Automation Test',
  body: 'Testing REST API using Playwright',
  userId: 1
};
```

This avoids hard-coding test data directly into every test case.

---

## 🔄 Request and Response Validation

For each API request, the framework validates:

1. HTTP status code
2. Response body
3. Response data
4. Required fields
5. Data types where applicable
6. Expected values
7. API behavior for negative scenarios

---

## 🚀 CI/CD Integration

The project can be integrated with CI/CD tools such as:

* GitHub Actions
* Jenkins
* Azure DevOps

Example GitHub Actions command:

```bash
npm install
npx playwright test
```

The Playwright HTML report can be generated after execution for test result analysis.

---

## 📝 Test Coverage

| Test Area                     | Coverage |
| ----------------------------- | -------- |
| GET APIs                      | ✅        |
| POST API                      | ✅        |
| PUT API                       | ✅        |
| PATCH API                     | ✅        |
| DELETE API                    | ✅        |
| Status Code Validation        | ✅        |
| Response Body Validation      | ✅        |
| Response Structure Validation | ✅        |
| Positive Scenarios            | ✅        |
| Negative Scenarios            | ✅        |
| Test Data Management          | ✅        |
| HTML Reporting                | ✅        |

---

## 📈 Future Enhancements

The framework can be enhanced with:

* Environment-specific configuration
* Authentication handling
* Schema validation
* Request/response logging
* API chaining
* Data-driven testing
* Allure reporting
* GitHub Actions CI/CD pipeline
* Reusable API client/service layer
* Additional negative scenarios

---

## 👩‍💻 Author

**Panchami SP**

QA Engineer | Manual Testing | Playwright Automation | API Testing

---

## 📄 Disclaimer

JSONPlaceholder is a fake REST API intended for testing and development purposes. The APIs may simulate create, update, and delete operations without providing persistent real-world data changes.
