import { PORT } from "./config/envs";
import app from "./server";

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});
