const { defineConfig } = require('cypress')

module.exports = defineConfig({

    e2e: {

        baseUrl: 'https://customerdev.everpro.id/auth/login',
        specPattern: "cypress/support/e2e",
        supportFile: false,
    },
    env: {
        username : '',
        password : ''
    }

})