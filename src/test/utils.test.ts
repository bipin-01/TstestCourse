import { Utils } from '../app/utils'


describe('utils test suite', () => {
    test('first test', () => {

        const abc = Utils.toUpperCase('abc')
        console.log("First test work")
    });

    test('parse simple url', ()=> {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login');

        expect(parsedUrl.href).toBe('http://localhost:8080/login')
        expect (parsedUrl.port).toBe('8080')
        expect(parsedUrl.protocol).toBe('http:');
        expect(parsedUrl.query).toEqual({})
    });
})