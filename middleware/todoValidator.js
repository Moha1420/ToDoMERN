const Joi = require("joi");
const todoValidator = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required()
    });

    const {error, value} = schema.validate(req.body);

    if(error){
        res.status(400).json({error: error.details.map((err) => err.message)})
    }

    next();
};

module.exports = {
    todoValidator,
};
const express = require('express');
const router = express.Router();
const {gettodo,
    createtodo,
    updatetodo,
    deletetodo} = require("../controllers/todotControllers");

// router.get('/', gettodo)
// router.post('/',createtodo)

router.route("/").get(gettodo).post(createtodo)

// router.put('/:id',updatetodo)
// router.delete('/:id',deleteProduct )

router.route("/:id").put(updatetodo).delete(deletetodo)

module.exports = router;