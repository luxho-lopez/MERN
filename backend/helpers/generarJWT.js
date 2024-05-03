import jwt from 'jsonwebtoken';

// Generar JWT

const generarJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "15m",
    })
};

export default generarJWT;