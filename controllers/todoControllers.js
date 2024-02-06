const Joi = require("joi") ;
const asyncHandler = require("express-async-handler")
const todo = require('../model/todotModel');

const gettodo = async(req,res) => {
    const todos = await todo.find();
    res.status(200).json(todos);

    // res.status(200).json({message:"Get all my products"})
}

const createtodo = async(req,res) => {
    // manual validation
    // if(!req.body.title){
    //     res.status(400).json({error:"please add title"})
    // }
    // if(!req.body.description){
    //     res.status(400).json({error:"please add description"})
    // }

    // res.status(200).json({message:"Create my products"})

    // validation using joi
    const schema = Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
    })

    const {error} = schema.validate(req.body)
    if(error){
        res.status(400).json({error:error.details.map((err)=>err.message)})
    }

    res.status(200).json({message:"create todos"})

    const products = await todo.create(
        {
            title: req.body.title,
            description:req.body.description,

        }
    );
    res.status(200).json(products);
}

const updatetodo = async(req,res) => {
    // res.status(200).json({message:`Update product ${req.params}`})
    const products = await Product.findById(req.param.id);
    if(!todos){
        res.status(400).json({error:"products not found"})
    }

    const updatedtodos = await todo.findbyIdANDUpdate(req.param.id,req.body)
    res.status(200).json(updatedtodos);
}

const deletetodo = async(req,res) => {
    // res.status(200).json({message:"Delete my todos"})
    const todos = await todo.findById(req.param.id)
    if(!todos){
        res.status(400).json({error:"todos  not found"})
    }

    const deletedtodo = await todo.findByIdANDRemove(req.param.id)
    res.status(200).json({message:"deleted successfully"});
}

module.exports= {
    gettodo,
    createtodo,
    updatetodo,
    deletetodo
};