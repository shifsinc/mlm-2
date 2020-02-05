// dependencies
var model = require('./db');
var restful = require('node-restful');

var Schema = model.Schema;
// Schema
var locationSchema = new Schema({
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
    level: {
        type: Schema.Types.Number,
        required: true,
        unique: false
    },
    typecon_id: {
        type: Schema.Types.ObjectId,
        ref: 'TypeContext',
        required: true,
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
        ref: 'Location',
        required: false,
        unique: false
    },
    resources: {
        type: Schema.Types.String,
        required: false,
        unique: false
    },
    geoData: {
        type: Schema.Types.Mixed,
        required: false,
        unique: false
    }

});

// Return Model
var Location = restful.model('Location', locationSchema, 'vlocation');

module.exports = Location;