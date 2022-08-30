const bcrypt = require('bcrypt');

class userTable {
    init(dbConnection) {
        this.dbConnection = dbConnection; 

        this.createTable();
        this.insertDefaultUsers();
    }

    createTable() {
        const USER_TABLE = `
                CREATE TABLE IF NOT EXISTS USER (id INT PRIMARY KEY AUTO_INCREMENT, 
                    userName VARCHAR(30) NOT NULL UNIQUE, 
                    email VARCHAR(50) NOT NULL, 
                    password VARCHAR(200) NOT NULL, 
                    fullName VARCHAR(50) NOT NULL, 
                    terms BOOLEAN, 
                    joinDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );`

        this.dbConnection.query(USER_TABLE, error => {
            if(error) console.log(error)
        })
    }

    insertDefaultUsers() {
        this.insertUser('admin', 'admin@ford.com', '123456', 'Admin', true);
		this.insertUser('camila', 'camila@ford.com', '123456', 'Camila Fernandes', true);
    }

    async insertUser(userName, email, password, fullName, terms) {
        const salt = 12
        const passwordHash = await bcrypt.hash(password, salt)
        const INSERT_USER = `
            INSERT INTO USER (userName, email, password, fullName, terms) 
                SELECT '${userName}', '${email}', '${passwordHash}', '${fullName}', ${terms} 
                WHERE NOT EXISTS (SELECT * FROM USER WHERE userName ='${userName}'            
            )`
        
        this.dbConnection.query(INSERT_USER, error => {
            if(error) console.log(error)
        })
    }
}

module.exports = new userTable; 

