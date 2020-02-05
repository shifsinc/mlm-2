var passportJWT = require("passport-jwt");
var User = require('../models/user.model')
var Person = require('../models/person.model');
var configurations = require('./configurations');

var strategyJWT = passportJWT.Strategy;
var extractJWT = passportJWT.ExtractJwt;

module.exports = function (passport) {
    var params = {
        secretOrKey: configurations.token.secret,
        jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken()
    };
    /**
     * payload: se encuentran los datos desencriptados que se guardan en el token
     */
    var strategy = new strategyJWT(params, async function (payload, done) {
        var jwt_user_id = '';
        /*var jwt_user_Type = payload.user.userType;*/
        if (!payload.detail) {
            jwt_user_id = payload.user._id;
        } else {
            jwt_user_id = payload.detail.user;
        }
        
        var myUser = [];
        var myPerson = [];
        
        try {
            await User.findById(jwt_user_id, function (err, user) {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    myUser = user;
                
                    /*if (user.userType == jwt_user_Type) {
                        myUser = user;
                    } else {
                        myUser = [];
                        jwt_user_id = '';
                   // }*/
                    
                } else {
                    myUser = [];
                }
            });
            
            await Person.findOne({ user: jwt_user_id }, function (err, person) {
                if (err) {
                    return done(err, false);
                }
                if (person) {
                    myPerson = person;
                } else {
                    myPerson = [];
                }
            });
        } catch (error) {
            console.log('Hubo un error al intentar comprobar la autenticidad de los datos');
        }
        return done(null, { user: myUser, person: myPerson });
    });
    passport.use(strategy);
};