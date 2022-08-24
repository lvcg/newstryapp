const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')


//@DESC login / landing page
//@route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('Login', {
        layout: 'login',
    })
})


//@desc Dashboard
//@route GET / dashboard
router.get('/dashboard', ensure (req, res) => {
    res.render('dashboard')
})

module.exports = router