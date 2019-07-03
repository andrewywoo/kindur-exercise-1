const express = require("express");

const hashing = require("../controllers/hashing");

const router = express.Router();

router.post("/message", hashing.postMessage);

router.get("/message/:hash", hashing.getMessage);

router.delete("/message/:hash", hashing.deleteMessage);

module.exports = router;
