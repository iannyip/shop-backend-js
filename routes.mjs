// 1. Import db model from models directory
import db from "./models/index.mjs";

// 2. Import controllers from controllers directory

// 3. Export function that returns bunch of routes
export default function bindRoutes(app) {
  // 3a. initialise controllers
  // 3b. Setup routes
  app.get("/", (request, response) => {
    response.send("you are in the root directory");
  });
}
