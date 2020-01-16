
class IRequestWrapper {

    constructor(req) {
        this.req = req;
    }

    getHeader(name, defaultValue, envVarSwitch) {
        throw new Error('Method has to be implemented in subclass');
    }

    getURL(defaultValue) {
        throw new Error('Method has to be implemented in subclass');
    }

    getMethod(defaultValue) {
        throw new Error('Method has to be implemented in subclass');
    }

    getRemoteHost(defaultValue, envVarSwitch) {
        throw new Error('Method has to be implemented in subclass');
    }

    getRemotePort(defaultValue, envVarSwitch) {
        throw new Error('Method has to be implemented in subclass');
    }

    getProtocol() {
        throw new Error('Method has to be implemented in subclass');
    }
}

module.exports = IRequestWrapper;