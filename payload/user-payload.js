// это payload для создания jwt
module.exports = class UserPayload {
    constructor(model) {
        this.login = model.login
    }
}