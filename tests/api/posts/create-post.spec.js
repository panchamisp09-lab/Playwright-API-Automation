const { test, expect } = require('@playwright/test');
const postData = require('../../../test-data/postData');

test.describe('Posts API - POST', () => {

    test('Verify successful post creation', async ({ request }) => {

        const response = await request.post('/posts', {
            data: postData.validPost
        });

        expect(response.status()).toBe(201);

        const responseBody = await response.json();

        expect(responseBody).toHaveProperty('id');
        expect(responseBody.title).toBe(postData.validPost.title);
        expect(responseBody.body).toBe(postData.validPost.body);
        expect(responseBody.userId).toBe(postData.validPost.userId);
    });
});