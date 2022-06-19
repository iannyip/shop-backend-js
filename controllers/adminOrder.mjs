// 1. Module exports function that does stuff to db
export default function initAdminOrderController(db) {
  // 2A /admin/orders
  const index = async (request, response) => {
    try {
      const allOrders = await db.Order.findAll();
      response.send(allOrders);
    } catch (error) {
      console.log(error);
    }
  };

  // 2B /admin/orders/:id

  return {
    index,
  };
}
