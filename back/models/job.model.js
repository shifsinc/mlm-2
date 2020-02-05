var model = require('./db');
var schemas = require('./schemas');
var restful = require('node-restful');
var Schema = model.Schema;

var jobSchema = new Schema({
    job : {
        type: schemas.jobSchema
    }
})

var Job = restful.model('job', jobSchema, 'vjob');

module.exports = Job;
