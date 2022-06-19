// 1. Module exports function that does stuff to db
export default function initAdminOrderController(db) {
  // 2A /admin/orders
  const index = async (request, response) => {
    try {
      const allOrders = await db.Order.findAll();
      // response.send(allOrders);
      response.render("allOrders");
    } catch (error) {
      console.log(error);
    }
  };

  // 2B /admin/orders/:id
  const show = async (request, response) => {
    try {
      // extrac order id from url
      const { id } = request.params;
      console.log(`id: ${id}`);

      // find order from db
      const order = await db.Order.findOne({
        where: { id },
      });

      console.log(order);

      // response
      if (order == null) {
        response.status(400);
        response.send(`No order with id ${id} found`);
      } else {
        response.status(202);
        response.send(order);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    show,
  };
}
