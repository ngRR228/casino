import { DataTypes, Sequelize } from "sequelize";


const db = new Sequelize({
    dialect: 'sqlite',
    storage: './storage/storage.sqlite'
})

const Posts = db.define("Posts", {
    title:{
        type:DataTypes.STRING,
        allowNull: false,
        
    }
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

Users.hasMany(Posts)
Posts.belongsTo(Users)



export {db, Users, Posts}

console.log('meow');



// create sql bata base