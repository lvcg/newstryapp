const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
const Story = require('../models/Story')


//@desc Show add Page
//@route GET /stories/add
router.get('/add', ensureAuth, (req,res) => {
    res.render('stories/add')
})

//@desc Process add form
//@route POST /stories
router.post('/', ensureAuth, async(req,res) => {
    try {
        req.body.user = req.user.id
        await Story.create(req.body)
        res.redirect('/dashboard')
    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
})

//@desc Show all stories
//@route GET /stories/add
router.get('/stories', ensureAuth, async(req,res) => {
    try {
        const stories = await Story.find({ status: 'public' })
        .populate('user')
        .sort({ createdAt: 'desc' })
        .lean()
    } catch (error) {
        console.error(error)
    res.render('error/500')
}
})
 

module.exports = router