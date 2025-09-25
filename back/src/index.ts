import app from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

const PORT = process.env.PORT || 3000

AppDataSource.initialize()
  .then(() => {
    console.log("Conexion a la base de datos realizada con exito");
    console.log("✅ Escuchando en puerto:", PORT);

    app.listen(PORT, () => {
      console.log(`El servidor esta escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error al conectar la base de datos`);
    console.log(error);
  });
