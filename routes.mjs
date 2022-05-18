// 1. Import db model from models directory
import db from "./models/index.mjs";

// 2. Import controllers from controllers directory
import initProductController from "./controllers/products.mjs";

// 3. Export function that returns bunch of routes
export default function bindRoutes(app) {
  // 3a. initialise controllers
  const productController = initProductController(db);

  // 3b. Setup routes
  app.get("/", (request, response) => {
    response.send("you are in the root directory");
  });

  app.get("/products", productController.index);
  app.get("/products/:id", productController.show);
}
