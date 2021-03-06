const path = require('path')

export default {
    http: {
        port: 2000,
        favicon: path.join(__dirname, '../src/assets/favicon.ico'),
        static: [
            {
                url: '/build', path: path.join(__dirname, '../build')
            }
        ]
    },
    session: {
        secret: 'SUPER_SECRET_KEY_KERE'
    },
    databases: {
        mongo: 'mongodb://127.0.0.1:27017/todos'
    }
}
