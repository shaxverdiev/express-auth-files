const jwt = require('jsonwebtoken')
// потом это нужно перенести в переменные окружения
const secretKeyAccess = 'secret-access'
// const secretKeyRefresh = 'secret-refresh'

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, secretKeyAccess, {expiresIn: '10m' })
        // const refreshToken = jwt.sign(payload, secretKeyRefresh, {expiresIn: '10m' })
        return {
            accessToken,
            // refreshToken
        }
    }
}
module.exports = new TokenService()