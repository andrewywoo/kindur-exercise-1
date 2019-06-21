const crypto = require("crypto");

const hashStore = {};

exports.postMessage = (req, res) => {
  const message = req.body.message;

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
  if (hashStore[hash]) {
    res.status(200).json({ message: hashStore[hash] });
  } else {
    res.status(404).send("Not Found.");
  }
};
