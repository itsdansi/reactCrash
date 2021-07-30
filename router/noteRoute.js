const express = require("express");
const router = express.Router();
const noteModel = require("./../model/noteModel");

router.route("/create").post((req, res) => {
  const note = new noteModel({
    title: req.body.title,
    content: req.body.content,
  });

  note
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        error: err,
      });
    });
});

router.route("/notes").get((req, res) => {
  noteModel.find().then((foundNotes) => {
    res.json(foundNotes);
  });
});

module.exports = router;
