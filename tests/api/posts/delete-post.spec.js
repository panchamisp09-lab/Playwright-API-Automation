const { test, expect } = require('@playwright/test');

test('Verify post deletion', async ({ request }) => {

    const response = await request.delete('/posts/1');

    expect(response.status()).toBe(200);
});