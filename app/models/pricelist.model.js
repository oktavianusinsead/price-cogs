module.exports = (sequelize, Sequelize, DataTypes) => {
    const Price = sequelize.define(
      "price", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        supplier_id: {
          type: DataTypes.STRING
        },
        sku_id: {
          type: DataTypes.STRING
        },
        uom: {
          type: DataTypes.STRING
        },
        stock: {
            type: DataTypes.INTEGER
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
  
    return Price;
  };
  