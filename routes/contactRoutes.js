const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Get All Contacts" });
});
router.route("/").post((req, res) => {
  res.status(200).json({ message: "create a new contact" });
});
router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `updated ${req.params.id}` });
});
router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `deleted ${req.params.id}` });
});
router.route("/:id").get((req, res) => {
  res.status(200).json({ message: "Get contact" });
});
