module.exports = (sequelize, Sequelize, DataTypes) => {
    const PO = sequelize.define(
      "po", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        customer_id: {
          type: DataTypes.STRING
        },
        order_date: {
            type: DataTypes.DATE
          },
        sku_id: {
          type: DataTypes.STRING
        },
        order_qty: {
            type: DataTypes.INTEGER
          },
        uom: {
          type: DataTypes.STRING
        },
        price: {
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
  
    return PO;
  };
  