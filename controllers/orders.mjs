// 1. This module exports the controller - a function which returns a set of functions
export default function initOrderController(db) {
  // 2. Each async function takes in a request and response object

  // 2A: /orders/create endpoint
  const create = async (request, response) => {
    try {
      response.send("inside orders/create endpoint");
    } catch (error) {
      console.log(error);
    }
  };

  //2B: /orders/:id endpoint
  const show = async (request, response) => {
    try {
      const { id } = request.params;
      const singleOrder = await db.Order.findOne({
        where: { id },
      });
      response.send(singleOrder);
      // response.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  };

  // 3. The exported controller will return an object of functions
  return {
    create,
    show,
  };
}