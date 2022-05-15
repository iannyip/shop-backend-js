export default function initOrderModel(sequelize, DataTypes) {
  return sequelize.define(
    "order",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      customerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "customer",
          key: "id",
        },
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
