const vehicledataModel = require('../models/vehicledataModel')
const addRequestHeader = require('../middleware/RequestHeader');

module.exports = app => {

    app.use(addRequestHeader);

    app.get('/vehicledata', (req, res) => {
        let value = ''
        if(req.query.value) {
            value = req.query.value
        }
        vehicledataModel.listVehicleData(value, res)
    })

    app.get('/vehicledata/:id', (req, res) => {
        const id = parseInt(req.params.id)
        vehicledataModel.getVehicledataById(id, res)
    })

    app.post('/vehicledata', (req, res) => {
        const VEHICLE_DATA = req.body;
        vehicledataModel.addVehicleData(VEHICLE_DATA, res)
    })

    app.put('/vehicledata/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body
        vehicledataModel.updateVehicleData(id, values, res)
    })

    app.delete('/vehicledata/:id', (req, res) => {
        const id = parseInt(req.params.id)
        vehicledataModel.deleteVehicleData(id, res)
    })
}
