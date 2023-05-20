class ApiRequestError extends Error {
    constructor(message, error) {
        super(message);
        this.name = "ApiRequestError";
        this.error = error
    }
}

export default ApiRequestError
