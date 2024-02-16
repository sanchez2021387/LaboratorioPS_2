const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
     nombre: {
        type: String,
        required: ['El Nombre Es Obligatorio']
     },
     correo: {
        type: String,
        required: ['El Correo Es Obligatorio']
     },
     
     role: {
        type: String,
        required: true,
        enum: ["ADMIN_ROLE", "USER_ROLE"]
     },

     estado:{
        type: Boolean,
        default: true
     }

});

module.exports = model('usuario', UsuarioSchema);