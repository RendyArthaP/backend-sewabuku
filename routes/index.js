const express = require('express');
const router = express.Router()

router.use('/', (req,res) => {
  res.json({
    message: "Web server connected success"
  })
})

module.exports = router