const { test, expect } = require('@playwright/test');

test.describe('Posts API - GET All Posts', () => {

    test('Verify successful GET posts request', async ({ request }) => {

        const response = await request.get('/posts');

        expect(response.status()).toBe(200);

        const posts = await response.json();

        expect(Array.isArray(posts)).toBeTruthy();

        expect(posts.length).toBeGreaterThan(0);

        console.log(posts);
    });
});