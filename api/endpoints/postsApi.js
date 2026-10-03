const ApiClient = require('../clients/apiClient');

class PostsApi {

    constructor(request) {
        this.client = new ApiClient(request);
        this.endpoint = '/posts';
    }

    async getAllPosts() {
        return await this.client.get(this.endpoint);
    }

    async getPostById(id) {
        return await this.client.get(`${this.endpoint}/${id}`);
    }

    async getPostsByUser(userId) {
        return await this.client.get(this.endpoint, {
            params: {
                userId
            }
        });
    }

    async createPost(postData) {
        return await this.client.post(this.endpoint, {
            data: postData
        });
    }

    async updatePost(id, postData) {
        return await this.client.put(`${this.endpoint}/${id}`, {
            data: postData
        });
    }

    async patchPost(id, postData) {
        return await this.client.patch(`${this.endpoint}/${id}`, {
            data: postData
        });
    }

    async deletePost(id) {
        return await this.client.delete(`${this.endpoint}/${id}`);
    }
}

module.exports = PostsApi;