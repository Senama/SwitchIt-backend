const {sum,} = require('../services/something');

test('It adds to numbers', done => {
    expect(sum(1, 2)).toBe(3);
    done();
});