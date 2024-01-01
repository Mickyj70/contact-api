const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Get All Contacts" });
})
router.post("/", (req, res) => {
    res.status(200).json({ message: "create a new contact" });
})
router.put("/:id", (req, res) => {
    res.status(200).json({ message: `updated ${req.params.id}` });
})
router.delete("/:id", (req, res) => {
    res.status(200).json({ message: `deleted ${req.params.id}` });;
})
router.get("/:id", (req, res) => {
    res.status(200).json({ message: "Get contact" });
})