const { test, expect } = require('@playwright/test');

test('Verify user posts and post comments relationship', async ({ request }) => {

    const userResponse = await request.get('/users/1');

    expect(userResponse.status()).toBe(200);

    const user = await userResponse.json();

    expect(user.id).toBe(1);

    const postsResponse = await request.get('/users/1/posts');

    expect(postsResponse.status()).toBe(200);

    const posts = await postsResponse.json();

    expect(posts.length).toBeGreaterThan(0);

    posts.forEach(post => {
        expect(post.userId).toBe(user.id);
    });

    const commentsResponse = await request.get('/posts/1/comments');

    expect(commentsResponse.status()).toBe(200);

    const comments = await commentsResponse.json();

    comments.forEach(comment => {
        expect(comment.postId).toBe(1);
    });
});