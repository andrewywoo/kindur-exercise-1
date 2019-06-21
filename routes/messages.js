const express = require("express");

const hashing = require("../controllers/hashing");

const router = express.Router();

router.post("/message", hashing.postMessage);

module.exports = router;
