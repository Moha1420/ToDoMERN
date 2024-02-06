const express = require('express');
const router = express.Router();
const {gettodo,
    createtodo,
    updatetodo,
    deletetodo} = require("../controllers/todoControllers");

// router.get('/', gettodo)
// router.post('/',createtodo )

router.route("/").get(gettodo).post(createtodo);

// router.put('/:id',updatetodo )
// router.delete('/:id',deletetodo )

router.route("/:id").put(updatetodo).delete(deletetodo);

module.exports = router;