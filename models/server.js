const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        
        this.connectarDB();
    }

    async connectarDB(){
        await dbConnection();
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor ejecutado y escuchado');
        }) 
    }
}
module.exports = Server;
