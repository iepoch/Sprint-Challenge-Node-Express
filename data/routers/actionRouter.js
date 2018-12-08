const express = require("express");
const router = express.Router();
const actions = require("../helpers/actionModel");

router.get("/", (req, res) => {
  actions
    .get()
    .then()
    .catch(err => {
    res.status(500).json({ error: "The actions could not be found" });
    });
});











module.exports = router;
