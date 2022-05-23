const express = require('express');
const path = require('path');
const methodOverride = require('method-override')
const app = express();
const publicPath = path.join(__dirname, '../../public');
/** Session */
const session = require('express-session');

/* rutas */
const rutaHome = require('../routes/home_route.js');
const rutaTest = require('../routes/test_route.js');


class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        
        // Middlewares
        this.middleware();

        // Rutas
        this.routes();
    }

    middleware() {
        // Directorio publico
        this.app.use(express.static(publicPath));

        this.app.set('view engine', 'ejs');
        /* seteo donde esta el directorio "views" */
        this.app.set('views',path.join(__dirname, '../views'));

        /* configuracion para poder capturar la informacion de los formularios */
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use(methodOverride('_method'));
        this.app.use(session({
            secret: 'Secreto',
            resave: 'false',
            saveUninitialized: 'false'
        }));
        
    }
    
    routes() {
        this.app.get('/', rutaHome);
        this.app.get('/home', rutaHome);
        this.app.get('/test', rutaTest);

        /*=======================================================================*/
        /* Error 404 */ //Nota: este bloque debe ir siempre al final de las rutas
        this.app.use((req, res, next) => {
            res.status(404).render('notFound');
        });
    }

    escuchar() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port)
        });
        
    }

}




module.exports= Server;