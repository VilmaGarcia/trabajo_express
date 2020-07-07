const express= require('express');
const router=express.Router();
//requerimos la funcion
const homeController=require('../controller/homeController');





//usamos ruta
router.get('/',homeController.index);











module.exports=router;