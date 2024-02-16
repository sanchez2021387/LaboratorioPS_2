const {Router} = require('express');
const {check} = require('express-validator');

const {validarCampos} = require('../middlewares/validar-campos');

const { usuariosPost, usuariosGet, getUsuarioByid, usuariosPut, usuariosDelete } = require('../controllers/user.controller');

const router = Router();

router.get("/", usuariosGet)

router.get(
    "/: id",
    [
        check("id", "El id no es unformato valido de mongoDB").isMongoId(),
        check("id").custom(existeUsuariosById),
        validarCampos
    ], getUsuarioById);

router.put(
    "/: id",
    [
        check("id", "El id no es unformato valido de mongoDB").isMongoId(),
        check("id").custom(existeUsuariosById),
        validarCampos
    ], usuariosPut);

router.delete(
    "/: id",
    [
        check("id", "El id no es unformato valido de mongoDB").isMongoId(),
        check("id").custom(existeUsuariosById),
        validarCampos
    ], usuariosDelete);

router.post(
    "/: id",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("password", "El password debe ser mayor a 6 caracteres").isLength({min: 6}),
        check("correo", "Este no es un correo valido").isEmail(),
        check("correo").custom(existeEmail),    
        check("role").custom(esRolValido),
        validarCampos
    ], usuariosPost);

module.exports = router;