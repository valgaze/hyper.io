var common  = require('../util/common.js');
var request = common.request;
var expect  = common.expect;

module.exports = [
    function (server, done) {
        expect(server).to.not.be.null;
        if(server) {
            request(server)
                .get('/service1/hello')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.body).to.be.a('object');

                    expect(res.body).to.have.keys("hello2", "ts");
                    expect(res.body.hello2).to.equal("world1");
                    if(done) done();
                });
        } else {
            if(done) done();
        }
    },
    function (server, done) {
        expect(server).to.not.be.null;
        if(server) {
            request(server)
                .get('/service2/hello')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.body).to.be.a('object');

                    expect(res.body).to.have.keys("statusCode");
                    expect(res.body.statusCode).to.equal(200);
                    if(done) done();
                });
        } else {
            if(done) done();
        }
    },

    function (server, done) {
        // TODO: Test Websocket connection
        if(done) done();
    }
];