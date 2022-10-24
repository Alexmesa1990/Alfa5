const producto=require("../models/productos")

//Ver la lista de productos
exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        success:true,
        message: "en esta ruta ustedes van a ver todos sus productos"
    })
}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next) =>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}