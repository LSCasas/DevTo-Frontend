const express = require('express');
const router = express.Router();
const usersUsecase = require('../usecases/users.usecase');

// POST /api/users - Crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const { name, profilePic, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Faltan campos por llenar!' });
        }

        const newUser = await usersUsecase.create({ name, profilePic, email, password });
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        if (error.message.includes("correo electrónico ya está en uso")) {
            return res.status(400).json({ message: 'El correo electrónico ya está en uso' });
        }
        res.status(500).json({ message: 'Error en el servidor. Por favor, intente de nuevo más tarde.' });
    }
});

// GET /api/users/:id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await usersUsecase.getById(id);
        res.json({ success: true, data: { user } });
    } catch (error) {
        res.status(error.status || 500).json({ success: false, error: error.message });
    }
});

module.exports = router;



