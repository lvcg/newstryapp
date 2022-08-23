const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
const Story = require('../models/Story')


//@desc 
//@route GET /
router.get('/', ensureGuest, (req,res) => {
    res.render('login', {
        layout: 'login',
    })
})


 

module.exports = router