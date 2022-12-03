class Servicio{
    constructor(costoBase){
        this.costBase = costoBase;

    }

    repararEquipo(equipo, cantidad){

        let costoTotal = this.costBase + equipo.precio * cantidad
        console.log("Se repararon los equipos, el costo total es de :" +costoTotal);


    }


}

export default Servicio;