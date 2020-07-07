let fs = require ('fs');
let concesionarias= JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))

const home={
        index:(req,res)=>{
            res.set({'content-type':'text/plain;charset=utf-8'});
            res.write('.............................................\n\n');
            res.write('Bienvenidos a la Concesionaria Richi \n\n\n');
            res.write('..............................................\n\n');
            res.write('Sucursales:\n\n');
            res.write('------------\n\n');

            concesionarias.forEach((concesionaria)=>{
            res.write('~'+concesionaria.sucursal +'\n\n\n');
        });
        res.end()
    }
}


module.exports=home