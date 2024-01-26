module.exports = (sequelize, Sequelize, DataTypes) => {
    const RFQCustomer = sequelize.define(
      "rfq_customer", // Model name
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
        sku_id: {
          type: DataTypes.STRING
        },
        qty: {
          type: DataTypes.INTEGER
        },
        uom: {
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
  
    return RFQCustomer;
  };
  