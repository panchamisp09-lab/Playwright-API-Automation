const { test, expect } = require('@playwright/test');
const postData = require('../../../test-data/postData');

test.describe('Posts API - PUT', () => {

    test('Verify complete post update', async ({ request }) => {

        const response = await request.put('/posts/1', {
            data: postData.updatedPost
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody.id).toBe(1);
        expect(responseBody.title).toBe(postData.updatedPost.title);
        expect(responseBody.body).toBe(postData.updatedPost.body);
        expect(responseBody.userId).toBe(1);
    });
});