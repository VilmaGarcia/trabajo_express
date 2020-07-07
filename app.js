const express= require('express');
const app=express();
//servidor
app.listen(3000,()=>console.log('SERVIDOR LEVANTADO OK!'));
//RUTAS
const routerHome=require('./routes/home');
const routerSucursales=require('./routes/sucursales');
const routerMarcas=require('./routes/marcas');
const routerAutos=require('./routes/autos');




//USO MODULOS DE RUTAS
app.use('/',routerHome);
app.use('/sucursales',routerSucursales);
app.use('/marcas',routerMarcas);
app.use('/autos',routerAutos);