const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
const Story = require('../models/Story')


//@desc Show add Page
//@route GET /stories/add
router.get('/add', ensureGuest, (req,res) => {
    res.render('login', {
        layout: 'login',
    })
})


 

module.exports = router