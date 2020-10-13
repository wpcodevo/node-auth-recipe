const express = require('express')
const viewsController = require('./controllers/viewsController')
const authController = require('../auth/authController')

const router = express.Router()

router.use(authController.isLoggedIn)

router.get('/', viewsController.getOverview)

router.get('/login', viewsController.getLogin)
router.get('/signup', viewsController.getSignup)
router.get('/recipes',authController.protect,viewsController.getRecipes)
router.get('/forgotPassword', viewsController.getForgotPassword)
router.get('/resetPassword/:token', viewsController.getResetPassword)

module.exports = router