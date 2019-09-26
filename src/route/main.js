const express = require('express')

const router = express.Router();

router.get('/', async(req, res) => {
    res.render('form', {})
})

router.get('/auth', async(req, res) => {
    res.render('auth', {})
})

module.exports = router;