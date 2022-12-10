import  express  from "express";
import routerMascota from "./routes/RutaMascota.js";
import  routerUsuario from "./routes/RutaUsuario.js";

const app = express ();

const puerto = 8080

app.listen(puerto, () => {
    console.log("El servidor esta escuchando peticiones")

})
app.use(express.json())
app.use("/usuario", routerUsuario)
app.use("/mascota", routerMascota)

app.get("/inicio", (req, res) =>{
    res.send("<b>Bienvenidos a mi primera app web</b>")

})
app.get("/redi", (req, res) =>{
    res.redirect("inicio")

})



//declarar un objeto JSON
const mascota = {
    nombre:"Calvin",
    id: 2,
    raza: "PitBull",
    edad: 7,
    "id usuario":1
}

app.get("/mascota",(req, res) => {
    res.json(mascota)

})

//Middlewares

