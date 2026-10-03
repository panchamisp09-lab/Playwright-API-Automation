const { test, expect } = require('@playwright/test');
const postData = require('../../../test-data/postData');

test('Verify partial post update', async ({ request }) => {

    const response = await request.patch('/posts/1', {
        data: postData.patchPost
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);

    expect(responseBody.title)
        .toBe(postData.patchPost.title);
});