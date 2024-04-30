

const registrar = (req, res) => {

    console.log(req.body);
    const { nombre, email, password, rol } = req.body;
    console.log(nombre);
    console.log(email);
    console.log(password);

    res.json({ msg: "Registrando usuarios..." });
}

const perfil = (req, res) => {
    res.json({ msg: "Mostrando Perfil" });
}

export {
    registrar,
    perfil
}