const dbConnection = require('../infra/connection');

class VehicleModel {
    
    listVehicles(res) { 
        const select = `
            SELECT id, vehicle, totalSales, connected, softwareUpdates FROM VEHICLE`

        dbConnection.query(select, (error, results) => {
            if(error) {
                res.status(400).json(error) 
            } else {
                const vehicle = results; 
                const result = { vehicles: vehicle }
                res.status(200).json(result)
            }
        })
    }

    selectVehicleById(id, res) {
        const selectById = `
            SELECT id, vehicle, totalSales, connected, softwareUpdates 
                FROM VEHICLE WHERE id=${id}`

        dbConnection.query(selectById, (error, results) => {
            error ? res.status(400).json(error) 
                : res.status(200).json(results)
        })
    }

    addVehicle(vehicle, res) {
        const insert = 'INSERT INTO VEHICLE SET ?'

        dbConnection.query(insert, vehicle, (error) => {
            error ? res.status(400).json(error) 
                : res.status(201).json({
                    message: `Vehicle succesfully added`
                })
        })
    }

    updateVehicle(id, values, res) {
        const update = `UPDATE VEHICLE SET ? WHERE id=?`

        dbConnection.query(update, [values, id], (error) => {
            error ? res.status(400).json(error) 
                : res.status(200).json(`vehicle id ${id} succesfully updated`)
        })
    }

    deleteVehicle(id, res) {
        const del = `DELETE FROM VEHICLE WHERE id=${id}`

        dbConnection.query(del, (error) => {
            error ? res.status(400).json(error) 
                : res.status(200).json(`vehicle id ${id} succesfully delected`)
        })
    }
}

module.exports = new VehicleModel;