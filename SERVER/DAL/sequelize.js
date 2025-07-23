import { DataTypes, Sequelize } from "sequelize";


const db = new Sequelize(process.env.NEON_URI, {
    dialect: "postgres"
})

export const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    average_time_seconds: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
})

await db.sync()
