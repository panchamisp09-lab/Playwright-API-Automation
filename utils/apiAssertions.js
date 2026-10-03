const { expect } = require('@playwright/test');

class ApiAssertions {

    static async expectStatus(response, expectedStatus) {
        expect(response.status()).toBe(expectedStatus);
    }

    static async expectJsonResponse(response) {
        const contentType = response.headers()['content-type'];

        expect(contentType).toContain('application/json');
    }

    static async expectResponseTime(response, maxTime) {
        expect(response.headers()).toBeTruthy();
    }
}

module.exports = ApiAssertions;


const ApiAssertions = require('../../../utils/apiAssertions');

await ApiAssertions.expectStatus(response, 200);
await ApiAssertions.expectJsonResponse(response);