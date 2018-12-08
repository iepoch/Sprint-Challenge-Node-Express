const express = require("express");
const router = express.Router();
const projects = require("../helpers/projectModel");

router.get("/", (req, res) => {
    projects
        .get()
        .then()
        .catch(err => {
            res.status(500).json({ error: "The actions could not be found" });
        });
});











module.exports = router;
