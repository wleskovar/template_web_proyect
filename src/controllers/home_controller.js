/* Controlador del Home*/

const home_controller = {
    index: (req, res) => {
        res.render('../views/home');
    }
};

module.exports = home_controller;