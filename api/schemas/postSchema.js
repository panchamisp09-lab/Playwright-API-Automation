module.exports = {
    requiredFields: [
        'userId',
        'id',
        'title',
        'body'
    ]
};

const postSchema = require('../../../api/schemas/postSchema');

test('Validate post response structure', async ({ request }) => {

    const response = await request.get('/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();

    postSchema.requiredFields.forEach(field => {
        expect(body).toHaveProperty(field);
    });
});