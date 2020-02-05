const model = require('./db');
var restful = require('node-restful');

var Schema = model.Schema;

var userSchema = new Schema({
    ci: {
        type: Schema.Types.String,
        require: true,
        unique: true
    },
    email: {
        type: Schema.Types.String,
        require: true,
        unique: false
    },
    phone: {
        type: Schema.Types.String,
        require: true,
        unique: false
    },
    password: {
        type: Schema.Types.String,
        require: true,
        unique: false
    },
    job: [{
        ciMain: {
            type: Schema.Types.String,
            require: false,
            unique: false
        },
        companyName: {
            type: Schema.Types.String,
            require: false,
            unique: false
        },
        typeAccount: {
            type: Schema.Types.String,
            require: false,
            unique: false
        }
    }],
    estado: {
        type: Schema.Types.Number,
        required: true,
        unique: false,
        default: 0
    }
});

var User = restful.model('User', userSchema, 'vuser');

module.exports = User;