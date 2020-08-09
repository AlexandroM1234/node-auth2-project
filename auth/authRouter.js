const router = require("express").Router();
const Users = require("../users/user-model");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../auth/secrets");

router.post("/register", (req, res) => {
  let user = req.body;
  const rounds = process.env.HASH_ROUNDS || 9;
  const hash = bycrypt.hashSync(user.password, rounds);

  user.password = hash;
  Users.addUser(user)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((err) => {
      console.log("you messed up adding a new user", err);
      res.status(500).json({ error: "error adding a new user" });
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  Users.findBy({ username })
    .then((user) => {
      if (user && bycrypt.compareSync(password, user[0].password)) {
        const token = tokenMaker(user);
        res.status(201).json({ message: `welcome ${username}` });
      } else {
        res.status(401).json({ message: "you shall not pass" });
      }
    })
    .catch((err) => {
      console.log("you messed up logging in", err);
      res.status(500).json({ error: "error logging in" });
    });
});

function tokenMaker(newPerson) {
  const payload = {
    userId: newPerson.id,
    userName: newPerson.username,
  };

  const secret = secrets.jwtSecret;

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
