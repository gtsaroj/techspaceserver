export class ApiError extends Error {
    constructor(message = "Something went wrong", statusCode, error, stack = "") {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.error = error;
        this.stack = stack;
        this.message = message;
        this.statusCode = statusCode;
        this.error = error;
    }
}
