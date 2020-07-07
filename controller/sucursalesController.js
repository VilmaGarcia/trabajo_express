let fs = require ('fs');
let dbConcesionarias= JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const sucursal={
        index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'}) 
        res.write('¡¡NUESTRAS SUCURSALES!!\n\n');
         dbConcesionarias.forEach((concesionaria)=>{
            res.write('~' +concesionaria.sucursal +'\n');
            res.write('DIRECCION:' + concesionaria.direccion+'\n');
            res.write('TELEFONO:' + concesionaria.telefono+'\n\n\n');
        })
    
        
        res.end()

    },
    detalle:(req,res)=>{
        let idNombSucursal = req.params.NombreSucursal;
                      
        dbConcesionarias.forEach((concesionaria)=>{
            if(concesionaria.sucursal == idNombSucursal){
                res.send('Sucursal: '+concesionaria.sucursal + '\n\n' + ' Direccion: ' + concesionaria.direccion + '\n\n' + ' Telefono: ' + concesionaria.telefono )              
            }
        })
        res.end("No se encuentro la Sucursal")
    }

}

module.exports=sucursal