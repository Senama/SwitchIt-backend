const request = require('supertest');
const {index} = require('../index');
const {app} = require('../app');

jest.mock('../services/uploadpics');
const uploadpics = require('../services/uploadpics');

 
test('calling uploadpics returning 200', done=>{
    uploadpics.renderpics.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .get('/')
    .then(response=>{
        expect(response.status).toBe(200)
        done()
    })
})

test('calling uploadpics returning 200', done=>{
    uploadpics.renderpics.mockImplementation(()=>{
        return Promise.reject()
    })
    request(app)
    .get('/clothes')
    .then(response=>{
        expect(response.status).toBe(404)
        done()
    })
})


test('calling uploadpics returning 200', done=>{
    uploadpics.renderpics.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .get('/clothes')
    .then(response=>{
        expect(response.status).toBe(200)
        done()
    })
})

test('calling uploadpics returning 200', done=>{
    uploadpics.create.mockImplementation(()=>{
        return Promise.resolve()
        })
        request(app)
        .get('/')
        .then(response=>{
            expect(response.status).toBe(200)
            done()
    })
})

