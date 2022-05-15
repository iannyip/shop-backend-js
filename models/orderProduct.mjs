export default function initorderProductModel(sequelize, DataTypes) {
  return sequelize.define(
    "orderProduct",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Order",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Product",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    { underscored: true }
  );
}
