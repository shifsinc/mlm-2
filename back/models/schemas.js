var model = require('./db');
var restful = require('node-restful');

var Schema = model.Schema;

var fieldSchema = new Schema({
    id: {
        type: Schema.Types.String,
        required: true
    },
    valor: {
        type: Schema.Types.String,
        required: false
    }
},
    { _id: false }
);

var jobSchema = new Schema({
    ciMain: {
        type: Schema.Types.String,
        required: false,
        unique: false
    },
    companyName: {
        type: Schema.Types.String,
        required: false,
        unique: false
    },
    typeAccount: {
        type: Schema.Types.String,
        required: false,
        unique: false
    }
});

var addressSchema = new Schema({
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Location',
        required: false,
        unique: false
    },
    state: {
        type: fieldSchema,
        required: false,
        unique: false
    },
    city: {
        type: fieldSchema,
        required: false,
        unique: false
    },
    zone: {
        type: fieldSchema,
        required: false,
        unique: false
    },
    geoData: {
        type: Schema.Types.String,
        required: false,
        unique: false
    },
    especificLocation: {
        type: Schema.Types.String,
        required: false,
        unique: false
    }

},
    { _id: false }
);

var contactScheme = new Schema({
    web: {
        type: Schema.Types.String,
        required: false,
        unique: false
    },
    email: {
        type: Schema.Types.String,
        required: false,
        unique: false
    },
    phone: {
        type: Schema.Types.String,
        required: false,
        unique: false
    },
    codePostal: {
        type: Schema.Types.String,
        required: false,
        unique: false
    },
    address: {
        type: addressSchema,
        required: false
    },
    socialLinks: [
        {
            name: {
                type: Schema.Types.String,
                required: false,
                unique: false
            },
            link: {
                type: Schema.Types.String,
                required: false,
                unique: false
            }
        }
    ],
},
    { _id: false }
);

var profileScheme = new Schema({
    ci: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    expedido: {
        type: Schema.Types.String,
        required: false,
        unique: false
    },
    firstName: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    lastNameP: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    lastNameM: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    gender: {
        type: Schema.Types.Number,
        required: false,
        unique: false
    },
    photo: {
        type: Schema.Types.String,
        required: false,
        unique: false
    },
    birthDate: {
        type: Schema.Types.Date,
        required: false,
        unique: false
    }
},
    { _id: false }
);

var schemasList =
{
    'jobSchema': jobSchema,
    'profileScheme': profileScheme,
    'contactSchema': contactScheme,
    'addressSchema': addressSchema
};
module.exports = schemasList;