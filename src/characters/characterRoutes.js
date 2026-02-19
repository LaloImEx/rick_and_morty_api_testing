const express = require("express");
const router = express.Router();
const { getAliveCharacters, getAliveCharactersByPage } = require("./characterController");

router.get("/characters", getAliveCharacters);
router.get("/characters/:page", getAliveCharactersByPage);

module.exports = router;