const model = require('./db');
var restful = require('node-restful');
var schemas = require('./schemas');

var Schema = model.Schema;

var companySchema = new Schema({
    name: {
        type: Schema.Types.String,
        require: true,
        unique: false
    },
    taxIdentification: {
        type: Schema.Types.String,
        require: true,
        unique: true
    },
    businessType: {
        type: Schema.Types.String,
        require: true,
        unique: true
    },
    multilevelType: {
        type: Schema.Types.String,
        require: true,
        unique: true
    },
    numberEmployees: {
        type: Schema.Types.Number,
        require: false,
        unique: false,
        default: 0
    },
    yearEstablished: {
        type: Schema.Types.Date,
        required: false,
        unique: false
    },
    contact: {
        type: schemas.contactSchema,
        require: false,
        unique: false
    },
    map: {
        type: Schema.Types.String,
        require: false,
        unique: false
    },
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
    }],
    warehouse: [{
        map: {
            type: Schema.Types.String,
            require: false,
            unique: false
        },
        contact: {
            type: schemas.contactSchema,
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

var Company = restful.model('Company', companySchema, 'vcompany');

module.exports = Company;