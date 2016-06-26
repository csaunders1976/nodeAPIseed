var expect = require('expect');
var server = require('../src/server.js');
var request = require('supertest');

describe('API', function(){
    var server;
    beforeEach(function(){
        server = require('../src/server.js');

    });

    afterEach(function(){
        server.close();
    });

    it('/ should return specified object.', function testHealth(done) {
        request(server)
            .get('/api/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200,{ hello: "world"} ,done);

    });

    it('/status should return healthy:true.', function testHealth(done) {
        request(server)
            .get('/api/status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200,{ healthy: true} ,done);

    });

    it('/user/id should return user obj with id.', function testHealth(done) {
        var fakeUserId = 374;
        request(server)
            .get('/api/user/' + fakeUserId)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200,{ user: {id: fakeUserId}} ,done);

    });

    it('/v1 should return specified object.', function testHealth(done) {
        request(server)
            .get('/api/v1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200,{ hello: "world"} ,done);

    });


});