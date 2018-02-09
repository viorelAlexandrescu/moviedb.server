const config = {
    secretKey: 'mySecretKey',
    secretValue: 'SuperSecretKeyInPlainText',
    routes: ['/', '/authenticate', '/register'],
    database: 'mongodb://192.168.100.2:27017/ip'
}

module.exports = config;