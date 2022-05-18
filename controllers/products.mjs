// 1. This module exports the controller - a function which returns a set of functions
export default function initProductController(db) {
  // 2. Each async function takes in a request and response object

  // 2A: /products endpoint
  const index = async (request, response) => {
    try {
      const allProducts = await db.Product.findAll();
      response.send(allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  //2B: /products/:id endpoint
  const show = async (request, response) => {
    try {
      const { id } = request.params;
      const singleProduct = await db.Product.findOne({
        where: { id },
      });
      response.send(singleProduct);
      response.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  };

  // 3. The exported controller will return an object of functions
  return {
    index,
    show,
  };
}
