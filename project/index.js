require("dotenv").config();
const app = require("./src/server"); // Asegúrate de que la ruta es correcta
const db = require("./src/lib/db");
const PORT = process.env.PORT || 5501;

db.connect()
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });


