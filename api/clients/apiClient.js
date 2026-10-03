class ApiClient {

    constructor(request) {
        this.request = request;
    }

    async get(endpoint, options = {}) {
        return await this.request.get(endpoint, options);
    }

    async post(endpoint, options = {}) {
        return await this.request.post(endpoint, options);
    }

    async put(endpoint, options = {}) {
        return await this.request.put(endpoint, options);
    }

    async patch(endpoint, options = {}) {
        return await this.request.patch(endpoint, options);
    }

    async delete(endpoint, options = {}) {
        return await this.request.delete(endpoint, options);
    }
}

module.exports = ApiClient;