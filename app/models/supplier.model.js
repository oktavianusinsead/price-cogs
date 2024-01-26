module.exports = (sequelize, Sequelize, DataTypes) => {
    const Supplier = sequelize.define(
      "supplier", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        supplier_code: {
          type: DataTypes.STRING
        },
        supplier_name: {
          type: DataTypes.STRING
        },
        address: {
          type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
          },
          state: {
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
  
    return Supplier;
  };
  