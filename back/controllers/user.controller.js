var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var config = require('../configurations/configurations');
var User = require('../models/user.model');
var Person = require('../models/person.model');
var Invitation = require('../models/invitation.model');
var Schema = require('../models/schemas');
var ObjectId = require('mongodb').ObjectID;

/**
 * Registra nuevos Usuarios
 * req: llegan todas las variables, en este caso correo, contraseña y nivel de acceso
 * res: devuelve el correo electrónico para iniciar sesión
 * la contraseña se guarda encriptada.
 */
exports.userRegister = async (req, res, next) => {
    let ci = req.body.profile.ci;
    let prof = req.body.profile;
    let contac = req.body.contact;
    let job = req.body.job;
    let pass = req.body.password;
    let state = req.body.estado;

    var userExists = false;
    await getUser(ci).then((user) => {
        if (user) {
            userExists = true;
        }
    });
    if (!userExists) {
        let passUser = 'ABC123';
        await bcrypt.hash(pass, config.bcrypt.saltRounds).then(
            function (hashedPassword) {
                passUser = hashedPassword;
            }
        );
        let codigoUser = await setUser(prof, contac, passUser, job);
        let myAssociated = [];

        await setPerson(codigoUser, prof, contac, myAssociated, state);
        res.status(200).json(contac.phone);
    } else {
        res.status(400).json({ message: "El usuario que intenta crear ya existe." });
    }
};

exports.getAllInvitations = async (req, res, next) => {
    let estado = req.query.estado;
    let ciMain = req.query.ciMain;
    let companyName = req.query.companyName;
    let invitados = await getInvitations(estado, ciMain, companyName).then((invitados) => {
        if (invitados) {
            return invitados;
        }
    });
    res.status(200).json(invitados);
};


exports.registerInvitation = async (req, res, next) => {
    let profile = req.body.profile;
    let contac = req.body.contact;
    let job = req.body.job;
    let pass = req.body.password;
    let state = req.body.estado;
    let date = req.body.date;
    let code = req.body.codeInvitation;
    let userExists = false;
    let tieneJobs = false;
    let codigoUser = '';

    setInvitation(profile, contac, pass, code, date, job, state);

    await getUser(profile.ci).then((user) => {
        if (user) {
            codigoUser = user._id;
            userExists = true;
            if (user.job.length > 0) {
                tieneJobs = true;
            }
        }
    });

    if (tieneJobs) {
        let codePerson = '';
        codePerson = await getUserPerson(codigoUser).then((person) => {
            if (person) {
                //codePerson = person._id;
                return person._id;
            }
            return '';
        });

        await User.findOneAndUpdate(
            { ci: profile.ci },
            { $push: { job: { ciMain: job.ciMain, companyName: job.companyName, typeAccount: job.typeAccount } } },
            { new: true }
        );


        await Person.findOneAndUpdate(
            { _id: job.ciMain },
            { $push: { associated: { ciMain: codePerson, companyName: job.companyName, typeAccount: job.typeAccount } } },
            { new: true }
        );
    }

    if (!userExists) {
        let passUser = 'ABC123';
        await bcrypt.hash(pass, config.bcrypt.saltRounds).then(
            function (hashedPassword) {
                passUser = hashedPassword;
            }
        );
        codigoUser = await setUser(profile, contac, passUser, job);

        let codePerson = '';
        codePerson = await getUserPerson(codigoUser).then((person) => {

            if (!person) {
                let myUser = codigoUser;
                let myAssociated = [];
                return setPerson(myUser, profile, contac, myAssociated, false);
            }
            return '';
        });

        var hex = /[0-9A-Fa-f]{6}/g;
        var id = (hex.test(job.ciMain)) ? ObjectId(job.ciMain) : job.ciMain;

        await Person.findOneAndUpdate(
            { _id: id },
            { $push: { associated: { ciMain: codePerson, companyName: job.companyName, typeAccount: job.typeAccount } } },
            { new: true }
        );
    }
    res.status(200).json('token');
};

exports.updatePersonInvitation = async (req, res, next) => { }

exports.getPersonInvitation = async (req, res, next) => {
    console.log(req.query);

    let user = await getUser(req.query.ci);
    if (user) {
        let person = await getUserPerson(user._id);
        if (person) {
            person.associated = user.job;
            res.status(200).json(person);
        } else {
            res.status(401).json({ message: "User does not exist" });
        }
    } else {
        res.status(401).json({ message: "User does not exist" });
    }
}

exports.getPersonAssociated = async (req, res, next) => {
    let person = await getPerson(req.query.userID);
    if (person) {
        let personaArmada = {};
        let asociados = [];
        for (let i = 0; i < person.associated.length; i++) {
            var socio = person.associated[i];
            if (socio.companyName == req.query.companyName) {
                let socios = await getPerson(socio.ciMain);
                if (!req.query.estado) {
                    asociados.push(socios);
                } else {
                    if (socios.estado == req.query.estado) {
                        asociados.push(socios);
                    }
                }

            }
        }
        personaArmada = {
            _id: person._id,
            user: person.user,
            profile: person.profile,
            contact: person.contact,
            associated: asociados,
            estado: person.estado
        };
        res.status(200).json([personaArmada]);
    } else {
        res.status(401).json({ message: "User does not exist" });
    }
}

exports.userLogin = async (req, res, next) => {
    let userPlain = {};
    let token = {};
    let userExists = true;
    let user = await getUser(req.query.ci).then(user => {
        if (!user) {
            userExists = false;
            return null;
        } else {
            return user;
        }
    });
    if (!userExists) {
        res.status(401).json({ message: "User does not exist" });
        return token;
    }
    let mybcrypt = await bcrypt.compare(req.query.password, user.password);
    if (!mybcrypt) {
        res.status(401).json({ message: "Password did not match" });
        return token;
    } else {
        userPlain.user = user;
        token.code = user._id;
        token.userName = user.nombre + ' ' + user.apellido;
        token.userPhone = user.phone;
        token.userCi = user.ci;
        token.userCompany = user.job;
    }
    await getUserPerson(user._id).then(detail => {
        if (!detail) {
            return;
        }
        token.code = detail.estado + detail._id;
        userPlain.detail = detail;
        token.userName = detail.profile.firstName + ' ' + detail.profile.lastNameP + ' ' + detail.profile.lastNameM;
    });
    token.token = getToken(userPlain);

    res.status(200).json(token);
    return token;
};

setUser = async (profile, contact, pass, job) => {
    let newUser = new User({
        ci: profile.ci,
        email: contact.email,
        phone: contact.phone,
        password: pass,
        job: job,
        estado: 1
    });
    let res = await newUser.save();
    return res._id;
};

setPerson = async (user, profile, contact, associated, estado) => {
    let newPerson = new Person({
        user: user,
        profile: profile,
        contact: contact,
        associated: associated,
        estado: estado
    });
    let res = await newPerson.save();
    return res._id;
};

setInvitation = (profile, contac, pass, code, date, job, state) => {
    let newInvitation = new Invitation({
        codeInvitation: code,
        profile: profile,
        contact: contac,
        job: job,
        password: pass,
        date: date,
        estado: state
    });
    newInvitation.save();
};

getToken = (userPlain) => {
    let miToken = jwt.sign(userPlain, config.token.secret, { expiresIn: "10h" });
    return miToken;
};

getUser = (ci) => {
    return User.findOne({ ci: ci });
};

getUserPerson = (id) => {
    return Person.findOne({ user: id });
};

getPerson = (id) => {
    return Person.findById(id);
};

getInvitations = (estado, ciMain, companyName) => {
    return Invitation.find({ estado: estado, 'job.ciMain': ciMain, 'job.companyName': companyName });
};

/*exports.getUserPerson = async (req, res, next) => {
    'use strict';
    Person.find({ user: req.user.user._id }, (err, person) => {
        'use strict';
        if (err) {
            return next(err);
        }
        res.json(person);
    });
};

exports.updatePerson = async (req, res, next) => {
    'use strict';
    let userPlain = {};
    let token = {};

    await getUserPerson(req.user.user._id).then(person => {
        if (!detail) {
            return;
        }
        userPlain.detail = detail;
        token.idMLM = req.user.user._id;
        token.userName = detail.profile.firstName + ' ' + detail.profile.lastName;
        token.userPhoto = detail.profile.photo;
        token.token = getToken(userPlain);
        res.status(200).json(token);
        return token;
    });
};*/