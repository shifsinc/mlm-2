// dependencies 
var model = require('./db');
var restful = require('node-restful');

var Schema = model.Schema;

var contextoSchema = new Schema({
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
    owner: { 
        type: Schema.Types.ObjectId,
        ref: 'Context', 
        required: false,
        unique: false
    }

});

// Return Model
var Context = restful.model('Context', contextoSchema, 'vcontext');

module.exports = Context;