var config = {
    server: {
        port: process.env.PORT || 8000
    },
    db: {
        options: {
            useFindAndModify: false,
            autoIndex: false,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500
        },
        uri: 'mongodb://localhost:27017/mlm'
    },
    bcrypt: {
        saltRounds: 11
    },
    token: {
        secret: 'VENTUN->Patrick-Roberto<-MLM',
        sesion: { session: false }
    },
    serverURL: __dirname
};

module.exports = config;