// 1. Import db model from models directory
import db from "./models/index.mjs";

// 2. Import controllers from controllers directory
import initProductController from "./controllers/products.mjs";
import initOrderController from "./controllers/orders.mjs";

// 3. Export function that returns bunch of routes
export default function bindRoutes(app) {
  // 3a. initialise controllers
  const productController = initProductController(db);
  const orderController = initOrderController(db);

  // 3b. Setup routes
  app.get("/", (request, response) => {
    response.send("you are in the root directory");
  });

  app.get("/products", productController.index);
  app.get("/products/:id", productController.show);

  app.get("/orders/create", orderController.create); // to convert this to POST
  app.get("/orders/:id", orderController.show);
}
