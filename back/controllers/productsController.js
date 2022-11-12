const producto=require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpacion del require


//Ver la lista de productos
exports.getProducts=async (req,res,next) =>{
    const productos= await producto.find();
    if (!productos){
        return res.status(404).json({
            success:false,
            error: true
        })
    }
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}


//ver un producto por ID
exports.getProductById= async (req, res, next)=>{
    const product= await producto.findById(req.params.id) 
    if (!product){
        return res.status(404).json({
            success:false,
            message:'No encontramos ese producto',
            error:true
        })
    }
    res.status(200).json({
        success:true,
        message: "Aqui debajo encuentras información sobre tu producto: ",
        product
    })
}

//Update un producto
exports.updateProduct= async (req,res,next) =>{
    let product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){ //Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success:false,
            message:"No encontramos ese producto"
        })
    }
    //Si el objeto si existia, entonces si ejecuto la actualización
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributo nuevos o actualizados
        runValidators:true
    });
    //Respondo OK si el producto si se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
}


// Eliminar un producto
exports.deleteProduct= async (req,res,next) =>{
    const product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){ //Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({ //Si el objeto no existe, return termina el metodo
            success:false,
            message:"No encontramos ese producto"
        })
    }
    await product.remove(); // Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente",
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


// QUE ES FETCH
// Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); //Llamamos el metodo creado para probar la consulta

// Ver por iD
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

verProductoPorID('6356978929c2810487a62ed6');