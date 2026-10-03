const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    timeout: 30 * 1000,

    expect: {
        timeout: 5000
    },

    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }]
    ],

    use: {
        baseURL: 'https://jsonplaceholder.typicode.com',

        extraHTTPHeaders: {
            'Content-Type': 'application/json'
        }
    },

    fullyParallel: true,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined
});