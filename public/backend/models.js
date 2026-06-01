import { DataTypes, Sequelize } from "sequelize";


const db = Sequelize({
    dialect: 'sqlite',
    storage: './storage/storage.sqlite'
})



const Users = db.define("Users", {
    username:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:true

    },
        password:{
            type: DataTypes.STRING  ,
            allowNull:false,
            
        },



}


)

export {db, Users}

// create sql bata base