const cors = require('cors');
const express = require('express');

const usersRouter = require('./routes/users.router');
const authRouter = require('./routes/auth.router');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter); // Asegúrate de que las rutas comienzan con /api
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.json({
        message: "Koders APIv1"
    });
});

module.exports = app; // Exporta el servidor correctamente


