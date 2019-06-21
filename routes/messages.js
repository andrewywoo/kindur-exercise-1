const express = require("express");

const hashing = require("../controllers/hashing");

const router = express.Router();

router.post("/message", hashing.postMessage);

router.get("/message/:hash", hashing.getMessage);

module.exports = router;
