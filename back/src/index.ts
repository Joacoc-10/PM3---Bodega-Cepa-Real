import app from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

const PORT = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`El servidor esta escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error al conectar la base de datos`);
    console.log(error);
  });
