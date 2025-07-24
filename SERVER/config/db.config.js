import { Sequelize } from "sequelize";

const sequelize = new Sequelize("neondb","neondb_owner", "npg_dDk7oCWM6lqK",{
    host:"ep-frosty-water-a2ug6tbs-pooler.eu-central-1.aws.neon.tech",
    dialect:"postgres",
    dialectOptions:{
        ssl:{
            require: true,
            rejectUnauthorized:false,
        },
    },
     logging: false,

})
export default sequelize;

