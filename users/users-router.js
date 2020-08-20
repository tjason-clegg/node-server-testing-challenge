const express = require("express");
const Users = require("./users-model");

const router = express.Router();

//// GET Requests ////

router.get("/", (req, res) => {
  Users.getUsers()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

//// POST Requests ////

router.post("/", (req, res) => {
  const user = req.body;

  Users.addUser(user)
    .then((response) => {
      console.log(response);
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

//// PUT Requests ////

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.editUser(id, changes)
    .then((response) => {
      Users.findById(id).then((response) => {
        res.status(200).json(response);
      });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

//// DELETE Requests ////

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then((response) => {
      return Users.delUser(id).then(() => {
        return res.status(200).json([response[0]]);
      });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
