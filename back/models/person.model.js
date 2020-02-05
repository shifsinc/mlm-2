const model = require('./db');
var restful = require('node-restful');

var schemas = require('./schemas');
var Schema = model.Schema;

var personSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
        unique: true
    },
    profile: {
        type: schemas.profileScheme
    },
    contact: {
        type: schemas.contactSchema
    },
    associated: [{
        type: schemas.jobSchema
    }],/*,
    bank: [{
        name: {
            type: Schema.Types.String,
            require: false,
            unique: false
        },
        type: {
            type: Schema.Types.String,
            require: false,
            unique: false
        },
        numberAccount: {
            type: Schema.Types.String,
            require: false,
            unique: false
        }
    }]*/
    estado: {
        type: Schema.Types.Number,
        require: true,
        unique: false
    }
});

var Person = restful.model('Person', personSchema, 'vperson');

module.exports = Person;