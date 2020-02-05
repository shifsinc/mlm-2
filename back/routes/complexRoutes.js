const usersController = require('../controllers/user.controller');
const fileController = require('../controllers/file.controller')

var express = require('express');
var router = express.Router();
const app = express();

const passport = require('passport');
// Set up middleware
const AuthenticateJWT = passport.authenticate('jwt', { session: false });

// Usuarios endpoints
router.get('/login', usersController.userLogin);
router.post('/register', usersController.userRegister);

router.post('/invitation', usersController.registerInvitation);
router.get('/invitation', usersController.getAllInvitations);
router.get('/personInvitation', usersController.getPersonInvitation);
router.put('/personInvitation', usersController.updatePersonInvitation);
router.get('/personAssociated', usersController.getPersonAssociated);

router.post('/image', AuthenticateJWT, fileController.upload);

app.use(passport.initialize());
require('../configurations/authenticationJWT')(passport);

// Main endpoint
app.get('/', (req, res, next) => {
    res.render('api.html');
});
module.exports = router;