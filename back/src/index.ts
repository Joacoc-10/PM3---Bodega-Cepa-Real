import app from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`El servidor esta escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error al conectar la base de datos");
    console.log(error);
  });

