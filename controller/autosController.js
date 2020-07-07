let fs = require('fs');
let bdAutos = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'))


const autos = {

    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})               
        res.write("¡¡LISTADO DE AUTOS DE CADA SUCURSAL!!"+ '\n\n')
        
        
        for(var i = 0; i < bdAutos.length; i++) {                                   
            res.write('~SUCURSAL: '+ bdAutos[i].sucursal + '\n') 
            
            
            for(var j = 0; j < bdAutos[i].autos.length; j++) {                       
                res.write('Marca ' + bdAutos[i].autos[j].marca +" Modelo:"+  bdAutos[i].autos[j].modelo +" ")
                res.write('año:' + bdAutos[i].autos[j].anio + ' color:' + bdAutos[i].autos[j].color + '\n')
           } 
           res.write('------------------------------------' + '\n')
           res.write('Total de Autos: '+ bdAutos[i].autos.length + '\n\n')
          
        }
        res.end()
    }
}
module.exports=autos;
