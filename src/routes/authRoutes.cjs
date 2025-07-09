const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.cjs');
const { registerSchema, loginSchema } = require('../validators/userValidator');
const validate = require('../middlewares/validate.cjs');

router.post('/register',validate(registerSchema) ,authController.register);

router.post('/login', validate(loginSchema),authController.login);

module.exports = router;