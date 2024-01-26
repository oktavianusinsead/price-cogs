module.exports = (sequelize, Sequelize, DataTypes) => {
    const Logistic = sequelize.define(
      "logistic", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        fleet_type: {
          type: DataTypes.STRING
        },
        capacity: {
          type: DataTypes.STRING
        },
        cost: {
          type: DataTypes.STRING
        },
        
        created_at: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updated_at: {
          allowNull: false,
          type: DataTypes.DATE
        }
      },
      {
       
        timestamps: true,
        underscrored: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    );
  
    return Logistic;
  };
  