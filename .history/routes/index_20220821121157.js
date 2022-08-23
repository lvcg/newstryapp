const express = require('express')
const router = express.Router()
const {}


//@DESC login / landing page
//@route GET /
router.get('/', (req, res) => {
    res.render('Login', {
        layout: 'login',
    })
})


//@desc Dashboard
//@route GET / dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router