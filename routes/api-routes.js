const express = require("express")
const router = express.Router()
const axios = require("axios")
const db = require("../models")

router.get("/search", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes", {
      params: req.query
    })
    .then(({
      data: {
        results
      }
    }) => res.json(results))
    .catch(err => res.send(err))
})

module.exports = router