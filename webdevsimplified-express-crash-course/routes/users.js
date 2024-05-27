const express = require("express");
const router = express.Router();

const users = [
  { id: 1, firstName: "John" },
  { id: 2, firstName: "Jane" },
  { id: 3, firstName: "Jim" },
];

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.send("New User Form");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ id: Date.now(), firstName: req.body.name });
  }
});

router.get("/:id", (req, res) => {
  res.send(`Get User with ID ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`Update User with ID ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete User with ID ${req.params.id}`);
});

router.param("id", (req, res, next, id) => {
  console.log(`User with ID ${id} was requested`);
  next();
});

// router.route("/:id")
//   .get((req, res) => {
//     res.send(`Get User with ID ${req.params.id}`);
//   })
//   .put((req, res) => {
//     res.send(`Update User with ID ${req.params.id}`);
//   })
//   .delete((req, res) => {
//     res.send(`Delete User with ID ${req.params.id}`);
//   });

module.exports = router;
