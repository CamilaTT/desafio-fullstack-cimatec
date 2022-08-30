require('dotenv').config();
const express = require('./src/config/express');
const dbConnection = require('./src/app/infra/connection');
const userTable = require('./src/app/infra/userTable');
const vehicleTable = require('./src/app/infra/vehicleTable');
const vehicleDataTable = require('./src/app/infra/vehicleDataTable'); 

const port = process.env.PORT || 3000; 

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome!'})
})

dbConnection.connect(error => {
    if(error) {
        console.log(error)
    } else {
        userTable.init(dbConnection);
        vehicleTable.init(dbConnection);
        vehicleDataTable.init(dbConnection);
        console.log('successfully connected');
           app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    } 
})


