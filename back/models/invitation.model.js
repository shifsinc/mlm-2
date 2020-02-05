var model = require('./db');
var restful = require('node-restful');
var schemas = require('./schemas');
var Schema = model.Schema;

var invitationSchema = new Schema({
    codeInvitation: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    profile: {
        type: schemas.profileScheme,
        required: false,
        unique: false
    },
    contact: {
        type: schemas.contactSchema,
        required: false,
        unique: false
    },
    job: {
        type: schemas.jobSchema,
        required: false,
        unique: false
    },
    password: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    date: {
        type: Schema.Types.Date,
        required: true,
        unique: false
    },
    estado: {
        type: Schema.Types.Number,
        required: true,
        unique: false
    }
});

// Return Model
var Invitation = restful.model('Invitation', invitationSchema, 'vinvitation');

module.exports = Invitation;