class Equipo{


tipo = "Entrada"
constructor( marca, precio){
    
    this.marca = marca 
    this.precio = precio

    }

encender (){
    console.log("El equipo "+this.marca+" está encendido");
    console.log("El equipo es del tipo:  "+this.tipo);

}

}

export default Equipo;
