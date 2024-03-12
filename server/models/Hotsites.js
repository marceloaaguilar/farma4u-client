module.exports = (sequelize, DataTypes) => {
    const Hotsites = sequelize.define("Hotsites",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },        
        urlSite:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:true
            },
            primaryKey: true
        },
        primaryColor:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        secondColor:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:true
            }
        }
    })

    return Hotsites;



}