module.exports = (sequelize, Sequelize, DataTypes) => {
    const Product = sequelize.define(
      "product", // Model name
      {
        // Model attributes
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        sku_no: {
          type: DataTypes.STRING
        },
        product_name: {
          type: DataTypes.STRING
        },
        product_category_id: {
          type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
          },
          uom: {
            type: DataTypes.STRING
          },
          weight: {
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
  
    return Product;
  };
  