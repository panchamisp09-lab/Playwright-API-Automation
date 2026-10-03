const { test, expect } = require('@playwright/test');

test.describe('Posts API - GET Post By ID', () => {

    test('Verify GET post by valid ID', async ({ request }) => {

        const response = await request.get('/posts/1');

        expect(response.status()).toBe(200);

        const post = await response.json();

        expect(post.id).toBe(1);
        expect(post.userId).toBe(1);

        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('body');
    });
});