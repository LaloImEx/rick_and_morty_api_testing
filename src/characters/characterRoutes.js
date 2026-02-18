const express = require("express");
const router = express.Router();
const { getAliveCharacters } = require("./characterController");

router.get("/characters", getAliveCharacters);

module.exports = router;