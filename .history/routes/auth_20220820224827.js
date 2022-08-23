const express = require('express')
const router = express.Router()


//@DESC Auth with Google
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