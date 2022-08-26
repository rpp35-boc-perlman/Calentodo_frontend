const request = require('supertest')

const app = require('../server/server');

describe('Front end Proxy Tests', () => {
    let server = null

    beforeEach(() => {
        server = app.listen(6600)
    })

    afterEach(() => {
        server.close()
    })

    it('Should run a server with a test route', async() => {
        request(server)
            .get('/status')
            .expect(200)
    });

});