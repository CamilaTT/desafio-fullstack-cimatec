class vehicleTable {
    init(dbConnection) {
        this.dbConnection = dbConnection; 

        this.createTable();
        this.insertDefaultVehicles();
    }

    createTable() {
        const VEHICLE_TABLE = `
            CREATE TABLE IF NOT EXISTS VEHICLE (
                id INT PRIMARY KEY AUTO_INCREMENT,
                vehicle TEXT DEFAULT ('') NOT NULL, 
                totalSales INT,
                connected INT,
                softwareUpdates INT
            );`

        this.dbConnection.query(VEHICLE_TABLE, error => {
            if(error) console.log(error)
        })
    }

    insertDefaultVehicles() {
        this.insertVehicle('Ranger', 145760, 70000, 27550);
		this.insertVehicle('Mustang', 1500, 500, 750);
		this.insertVehicle('Territory', 4560, 4000, 3050);
		this.insertVehicle('Bronco Sport', 7560, 4060, 2050);
    }

    insertVehicle(vehicle, totalSales, connected, softwareUpdates) {
		const INSERT_VEHICLE = `
            INSERT INTO VEHICLE (vehicle, totalSales, connected, softwareUpdates) 
                SELECT '${vehicle}', ${totalSales}, ${connected}, ${softwareUpdates} 
                WHERE NOT EXISTS (SELECT * FROM VEHICLE WHERE vehicle = '${vehicle}'
            )`

		this.dbConnection.query(INSERT_VEHICLE, error => {
            if(error) console.log(error)
        })
	}
}

module.exports = new vehicleTable;