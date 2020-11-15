const test = require('../frontend/file');
describe('File', () => {
    it('file', () => {
        expect(test).toEqual({'test':'foo'});
    });

});
