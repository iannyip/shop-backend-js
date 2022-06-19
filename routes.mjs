// 1. Import db model from models directory
import db from "./models/index.mjs";

// 2. Import controllers from controllers directory
import initProductController from "./controllers/products.mjs";
import initOrderController from "./controllers/orders.mjs";
import initAdminOrderController from "./controllers/adminOrder.mjs";

// 3. Export function that returns bunch of routes
export default function bindRoutes(app) {
  // 3a. initialise controllers
  const productController = initProductController(db);
  const orderController = initOrderController(db);
  const adminOrderController = initAdminOrderController(db);

  // 3b. Setup routes
  app.get("/", (request, response) => {
    response.send("you are in the root directory");
  });

  app.get("/products", productController.index);
  app.get("/products/:id", productController.show);

  app.get("/orders/createForm", orderController.createForm);
  app.post("/orders/create", orderController.create);
  app.get("/orders/:id", orderController.show);

  app.get("/admin/orders", adminOrderController.index);
}
