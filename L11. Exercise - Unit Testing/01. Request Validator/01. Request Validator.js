function validateRequest(obj) {
    const RETURN_MESSAGE = 'Invalid request header: Invalid ';
    const METHOD_STRING = 'Method';
    const URI_STRING = 'URI';
    const VERSION_STRING = 'Version';
    const MESSAGE_STRING = 'Message';

    let isMethodValid = validateMethod();
    let isUriValid = validateUri();
    let isVersionValid = validateVersion();
    let isMessageValid = validateMessage();


    isMethodValid(obj);
    isUriValid(obj);
    isVersionValid(obj);
    isMessageValid(obj);

    console.log(obj);
    return obj;

    function validateMethod() {
        const VALID_METHODS = ['GET', 'POST', 'DELETE', 'CONNECT'];
        return function (obj) {
            if (!obj.hasOwnProperty('method') || !VALID_METHODS.includes(obj.method)) {
                throw new Error(RETURN_MESSAGE + METHOD_STRING);
            }
            return true;
        }
    }

    function validateUri() {
        const PATTERN = /^(\*|[A-Za-z.0-9]+)$/;
        return function (obj) {
            if (!PATTERN.test(obj.uri) || !obj.hasOwnProperty('uri')) {
                throw new Error(RETURN_MESSAGE + URI_STRING);
            }
            return true;
        }
    }

    function validateVersion() {
        const VALID_VERSIONS = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        return function (obj) {
            if (!VALID_VERSIONS.includes(obj.version) || !obj.hasOwnProperty('version')) {
                throw new Error(RETURN_MESSAGE + VERSION_STRING);
            }
            return true;
        }
    }

    function validateMessage() {
        const PATTERN = /^[^<>\\&'"]+?$/g;
        return function (obj) {
            if (obj.hasOwnProperty('message') && (obj.message === '' || PATTERN.test(obj.message))) {
                return true;
            } else {
                throw new Error(RETURN_MESSAGE + MESSAGE_STRING);
            }
        }
    }
}

// function tests
const TEST_DATA = [
    {method: 'GET', uri: 'svn.public.catalog', version: 'HTTP/1.1', message: ''},
    {method: 'OPTIONS', uri: 'git.master', version: 'HTTP/1.1', message: '-recursive'},
    {method: 'POST', uri: 'home.bash', message: 'rm -rf /*'},
    {method: 'GET', uri: 'kkk jjjj', version: 'HTTP/0.8', message: ''}
];

for (let data of TEST_DATA) {
    try {
        validateRequest(data);
    } catch (ex) {
        console.log(ex.message);
    }
    console.log();
}