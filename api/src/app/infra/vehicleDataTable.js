class vehicleDataTable {
    init(dbConnection) {
        this.dbConnection = dbConnection; 

        this.createTable();
        this.insertDefaultVehicleData();
    }

    createTable() {
        const VEHICLEDATA_TABLE = `
            CREATE TABLE IF NOT EXISTS VEHICLEDATA (
                id INT PRIMARY KEY AUTO_INCREMENT,
                vin VARCHAR(20) NOT NULL UNIQUE, 
                odometer VARCHAR(10) DEFAULT ('') NOT NULL, 
                tirePressure VARCHAR(30) DEFAULT ('') NOT NULL,
                status VARCHAR(10) DEFAULT ('') NOT NULL,
                batteryStatus VARCHAR(10) DEFAULT ('') NOT NULL,
                fuelLevel VARCHAR(10) DEFAULT ('') NOT NULL,
                lat VARCHAR(10) DEFAULT ('') NOT NULL,
                _long VARCHAR(10) DEFAULT ('') NOT NULL
            );`

        this.dbConnection.query(VEHICLEDATA_TABLE, error => {
            if(error) console.log(error)
        })
    }

    insertDefaultVehicleData() {
        this.insertVehicledata(
            '2FRHDUYS2Y63NHD22454', '23344', '36,36,35,34',
			'ON', 'OK', '76', '-12,2322', '-35,2314'
		);

        this.insertVehicledata(
            '2RFAASDY54E4HDU34874', '130000', '36,34,36,33', 'OFF', 
            'Recharge', '19','-12,2322', '-35,2314'
        );

        this.insertVehicledata(
            '2FRHDUYS2Y63NHD22455', '50000', '36,36,35,34', 'ON', 
            'OK', '90','-12,2322', '-35,2314'
        );

        this.insertVehicledata(
            '2RFAASDY54E4HDU34875', '10000', '36,34,36,33', 'OFF', 
            'OK', '25','-12,2322', '-35,2314' 
        );

        this.insertVehicledata(
            '2FRHDUYS2Y63NHD22654', '23544', '36,36,35,34', 'ON',
            'OK', '76', '-12,2322', '-35,2314'
        );

        this.insertVehicledata(
            '2FRHDUYS2Y63NHD22854', '23574', '36,36,35,34', 'ON',
            'OK', '75', '-13,2322', '-35,2808'
        );
    }

    insertVehicledata(vin, odometer, tirePressure, status, batteryStatus, fuelLevel, lat, _long) {
		const INSERT_VEHICLEDATA = `
            INSERT INTO VEHICLEDATA (
                vin, 
                odometer,
                tirePressure,
                status,
                batteryStatus, 
                fuelLevel,
                lat,
                _long
            ) SELECT '${vin}', '${odometer}', '${tirePressure}', '${status}', '${batteryStatus}', '${fuelLevel}', 
                '${lat}', '${_long}' WHERE NOT EXISTS (SELECT * FROM VEHICLEDATA WHERE vin = '${vin}')`

        this.dbConnection.query(INSERT_VEHICLEDATA, error => {
            if(error) console.log(error)
        })
	}
}

module.exports = new vehicleDataTable; 