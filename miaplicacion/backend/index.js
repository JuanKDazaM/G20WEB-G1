import Equipo from "./Equipo.js";
import Servicio from "./Servicio.js";

console.log("HOLA JUANK");

const audifonos = new Equipo("JBL", 100);
audifonos.encender();

const reparacion = new Servicio(50);
reparacion.repararEquipo(audifonos, 8)