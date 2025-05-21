import { config } from "./config/envs";
import app from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Conexion a la base de datos realizada con exito");
    app.listen(config.PORT, () => {
      console.log(`El servidor esta escuchando en el puerto ${config.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error al conectar la base de datos`);
    console.log(error);
  });
