const express = require("express");
const router = express.Router();
const actions = require("../helpers/actionModel");

router.get("/", (req, res) => {
  actions
    .get()
      .then(actions => {
        res.json(actions)
    })
    .catch(err => {
    res.status(500).json({ error: "The actions could not be found" });
    });
});



router.get('/:id', (req, res) => {
    const { id } = req.params

    actions
        .get(id)
        .then(action => {
            action ?
                res.status(200).json(action)
                :
                res.status(400).json({error: "The actions does not exist"})
        })
        .catch()


})

router.post('/', (req, res) => {
    const { project_id, description, notes } = req.body

    if (project_id, description, notes) {
        actions.insert(req.body)
            .then(action => res.status(201).json(action))
            .catch(err => {
                res.status(500).json({
                    error: "Error when adding the action"})
            })
    } else {
        res.status(400).json({error: "Please add notes, description and project id."})
    }
})






module.exports = router;
