const express = require("express");
const router = express.Router();
const actions = require("../helpers/actionModel");

router.get("/", (req, res) => {
  actions
    .get()
    .then(actions => {
      res.json(actions);
    })
    .catch(err => {
      res.status(500).json({ error: "The actions could not be found" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  actions
    .get(id)
    .then(action => {
      action
        ? res.status(200).json(action)
        : res.status(400).json({ error: "The actions does not exist" });
    })
    .catch();
});

router.post("/", (req, res) => {
  const { project_id, description, notes } = req.body;

  if ((project_id, description, notes) && description.length < 128) {
    actions
      .insert(req.body)
      .then(action => res.status(201).json(action))
      .catch(err => {
        res.status(500).json({
          error: "Error when adding the action"
        });
      });
  } else {
    res
      .status(400)
      .json({ error: "Please add notes, description and project id." });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  actions
    .remove(id)
    .then(count => {
      count
        ? actions.get().then(action => {
            res.status(200).json(action);
          })
        : res.status(404).json({ error: "Invalid Id" });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: " Can not find the id or has been deleted" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { project_id, description, notes } = req.body;

  if ((project_id, description, notes) && description.length < 128) {
    actions
      .update(id, req.body)
      .then(count => {
        count
          ? actions.get(id).then(action => {
              res.json(action);
            })
          : res
              .status(404)
              .json({ error: "The action specified id can not be found" });
      })
      .catch(err => {
        res.status(500).json({ error: "Can not update the action" });
      });
  } else {
    res.status(400).json({
      error: "Please provide, notes, project id, and description"
    });
  }
});

module.exports = router;
