const dbConnection = require('../infra/connection');

class VehicledataModel {

    listVehicleData(value, res) {

        const selectByVin = `
            SELECT id, vin, odometer, tirePressure, status, batteryStatus, fuelLevel,
            lat, _long FROM VEHICLEDATA WHERE vin LIKE '%${value}%'`

        dbConnection.query(selectByVin, (error, results) => {

            if(error) {
                console.log(error)
                res.status(400).json(error)

            } else {
                const vehicledata = results;
                const result = { vehicleData: vehicledata };
                res.status(200).json(result)
            }
        })
    }

    getVehicledataById(id, res) {
        const selectById = `
            SELECT id, vin, odometer, tirePressure, status, batteryStatus, fuelLevel,
            lat, _long FROM VEHICLEDATA WHERE id=${id}`

        dbConnection.query(selectById, (error, results) => {
            error ? res.status(400).json(error) : res.status(200).json(results)
        })
    }

    addVehicleData(vehicledata, res) {
        const insert = 'INSERT INTO VEHICLEDATA SET ?'

        dbConnection.query(insert, vehicledata, (error) => {
            error ? res.status(400).json(error)
                : res.status(201).json({
                    message: `Vehicle data succesfully added`
                })
        })
    }

    updateVehicleData(id, values, res) {
        const update = `UPDATE VEHICLEDATA SET ? WHERE id=?`

        dbConnection.query(update, [values, id], (error) => {
            error ? res.status(400).json(error)
                : res.status(200).json(`vehicle data id ${id} succesfully updated`)
        })
    }

    deleteVehicleData(id, res) {
        const del = `DELETE FROM VEHICLEDATA WHERE id=${id}`

        dbConnection.query(del, (error) => {
            error ? res.status(400).json(error)
                : res.status(200).json(`vehicle data id ${id} succesfully delected`)
        })
    }
}

module.exports = new VehicledataModel;

