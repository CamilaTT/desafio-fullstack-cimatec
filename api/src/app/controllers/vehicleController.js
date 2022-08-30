const vehicleModel = require('../models/vehicleModel')
const addRequestHeader = require('../middleware/RequestHeader');

module.exports = app => {
    
    app.use(addRequestHeader); 

    app.get('/vehicle', (req, res) => {
        vehicleModel.listVehicles(res)
    })

    app.get('/vehicle/:id', (req, res) => {
        const id = parseInt(req.params.id)
        vehicleModel.selectVehicleById(id, res)
    })

    app.post('/vehicle', (req, res) => {
        const VEHICLE = req.body;
        vehicleModel.addVehicle(VEHICLE, res)
    })

    app.put('/vehicle/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body 
        vehicleModel.updateVehicle(id, values, res)
    })

    app.delete('/vehicle/:id', (req, res) => {
        const id = parseInt(req.params.id)
        vehicleModel.deleteVehicle(id, res)
    }) 
}
