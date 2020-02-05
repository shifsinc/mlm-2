// dependencies
var model = require('./db');
var restful = require('node-restful');

var Schema = model.Schema;
// Schema
var typeContextSchema = new Schema({
    acronym: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    name: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    description: {
        type: Schema.Types.String,
        required: false,
        unique: false
    },
    estado: {
        type: Schema.Types.Number,
        required: true,
        unique: false,
        default: 0
    },
    context_id: {
        type: Schema.Types.ObjectId,
        ref: 'Context',
        required: true,
        unique: false
    }

});

// Return Model
var TypeContext = restful.model('TypeContext', typeContextSchema, 'vtypeContext');

module.exports = TypeContext;