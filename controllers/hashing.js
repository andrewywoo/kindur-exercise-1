const crypto = require("crypto");

//if real implementation setup mongodb to persist data using hash as the primary key.
const hashStore = {};

exports.postMessage = (req, res) => {
  const message = req.body.message;
  if (!message) {
    res.status(400).send("Invalid Param");
  }

  //create hash
  const hash = crypto
    .createHash("sha256")
    .update(message)
    .digest("hex");

  //put message in the hash store with hash as the key
  if (!hashStore[hash]) {
    hashStore[hash] = message;
  }

  //send digest back to user.
  res.status(201).json({ digest: hash });
};

exports.getMessage = (req, res) => {
  const hash = req.params.hash;

  //if hashStore contains hash. send message back to user. if not send 404.
  if (hashStore[hash]) {
    res.status(200).json({ message: hashStore[hash] });
  } else {
    res.status(404).send("Not Found.");
  }
};

exports.deleteMessage = (req, res) => {
  const hash = req.params.hash;

  //delete hashStore
  delete hashStore[hash];
  res.status(204).end();
};
