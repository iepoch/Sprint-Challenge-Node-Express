const express = require("express");
const router = express.Router();
const projects = require("../helpers/projectModel");

router.get("/", (req, res) => {
  projects
    .get()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: "The projects could not be found" });
    });
});

router.post("/", (req, res) => {
  const { description, name } = req.body;

  if ((description, name) && (name.length < 128)) {
    projects
      .insert(req.body)
      .then(project => res.status(201).json(project))
      .catch(err => {
        res.status(500).json({
          error: "Error when adding the project"
        });
      });
  } else {
    res
      .status(400)
        .json({ error: "Please provide name and description. Or the name is too long must be less than 128 characters" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  projects
    .remove(id)
    .then(count => {
      count
        ? projects.get().then(project => {
            res.status(200).json(project);
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
  const { description, name } = req.body;

    if ((description, name) && (name.length < 128)) {
    projects
      .update(id, req.body)
      .then(count => {
        count
          ? projects.get(id).then(project => {
              res.json(project);
            })
          : res
              .status(404)
              .json({ error: "The project specified id can not be found" });
      })
      .catch(err => {
        res.status(500).json({ error: "Can not update the project" });
      });
  } else {
    res.status(400).json({
      error:"Please provide, notes, project id, and description. Or the name is too long must be less than 128 characters"
    });
  }
});

router.get("/list/:id", (req, res) => {
  const { id } = req.params;
  projects
    .get(id)
    .then(project => {
      projects
        .getProjectActions(id)
        .then(list => res.status(200).json(list))
        .catch(err => res.status(404).json({ error: "Not Found" }));
    })
    .catch(err => {
      res.status(500).json({ error: "Can not find the projects information" });
    });
});

module.exports = router;
