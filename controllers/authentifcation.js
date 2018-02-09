class AuthController {
    static authenticate(credentials, callback) {
        setImmediate(() => {
            if (credentials.email === "test" && credentials.password === "test") {
                let token = 'token'
                callback(token);
            } else {
                callback(null);
            }
        });
    }
}
