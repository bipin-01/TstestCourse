import { Utils } from '../app/utils'


describe('utils test suite', () => {

    // beforeEach and beforeAll are the two hooks use by jest to run function or code before running others code
    beforeEach(() => {
        console.log("Before each")
    })

    beforeAll(() => {
        console.log('before all')
    })

    test('first test', () => {

        const abc = Utils.toUpperCase('abc')
        console.log("First test work")
    });

    test.skip('parse simple url', ()=> {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login');

        expect(parsedUrl.href).toBe('http://localhost:8080/login')
        expect (parsedUrl.port).toBe('8080')
        expect(parsedUrl.protocol).toBe('http:');
        expect(parsedUrl.query).toEqual({})
        console.log("second test work")
    });

    // this is the error section
    // here we describe three ways to check error in jest
    test('test invalid URL', () => {
        function expectError(){
            Utils.parseUrl('')
        }
        expect(expectError).toThrowError('Empty url');
        console.log("first error")
    })

    test('test invalid URL with arrow function', () => {
        expect(() => {
            Utils.parseUrl('')
        }).toThrow('Empty url');
        console.log("second error")
    });

    test.only('test invalid URL with try catch', () => {
        try {
            Utils.parseUrl('');
        }catch(error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Empty url');
        }
        console.log("third error")
    })
})                                    