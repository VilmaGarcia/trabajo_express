let fs = require('fs');
let bdAutos = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))


const marcas = {
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})               
        res.write('¡¡TRABAJAMOS CON LAS MEJORES MARCAS!!' + '\n\n\n')
        let marcas = []
        
        
        for(let i = 0; i < bdAutos.length; i++) {
            for(let j = 0; j < bdAutos[i].autos.length; j++) { 
                                                      
              if (marcas.includes(bdAutos[i].autos[j].marca)==false){
                marcas.push(bdAutos[i].autos[j].marca)
                res.write('~'+bdAutos[i].autos[j].marca + '\n\n')                 
              }                
           }           
        }
        res.write('-----------------------------------\n')
        res.write(' Total de Marcas : '+ marcas.length + '\n')     
        res.end()
    }}
    module.exports=marcas;