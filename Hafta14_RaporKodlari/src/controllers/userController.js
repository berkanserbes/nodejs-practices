const User = require("../models/User");

const getUsers = (req, res) => {
  try {
    User.find()
      .then((result) => {
        if (!result) {
          return res.status(404).send();
        }
        return res.status(200).send(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const getUser = (req, res) => {
  try {
    const { id } = req.params;

    User.findById(id)
      .then((user) => {
        if (!user) {
          return res.status(404).send();
        }
        return res.status(200).send(user);
      })
      .catch((err) => {
        return res.status(404).json({ error: err });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const createUser = (req, res) => {
  try {
    const user = new User(req.body);
    user
      .save()
      .then(() => {
        return res.status(201).send(user);
      })
      .catch((err) => {
        return res.status(404).json({ error: err.message });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const removeUser = (req, res) => {
  try {
    const { id } = req.params;

    User.findByIdAndDelete(id)
      .then(() => {
        if (!result) {
          return res.status(404).send();
        }
        return res.status(200).json({ message: "User deleted successfully" });
      })
      .catch((err) => {
        return res.status(404).json({ error: err });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;

    User.findByIdAndUpdate(id, user, { new: true })
      .then((result) => {
        if (!result) {
          return res.status(404).send();
        }
        return res
          .status(200)
          .json({ message: "User successfully updated", user: result });
      })
      .catch((err) => {
        return res.status(404).json({ error: err });
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { getUsers, getUser, createUser, removeUser, updateUser };
