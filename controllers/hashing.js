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
  console.log("hashStore:", hashStore);

  //send digest back to user.
  res.status(201).json({ digest: hash });
};
