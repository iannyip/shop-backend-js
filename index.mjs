// THIS IS THE ROOT FILE RUN WITH NPX NODEMON INDEX.JS

// 1a. Import NPM libraries
import express from "express";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";

// 1b. Import bindRoutes function
import bindRoutes from "./routes.mjs";

// 2. Variables

// 3. Initialise Express
const app = express();

// 4. All the additional middleware we want to add
const mwLogger = (request, response, next) => {
  console.log("---------------------------------------------------------");
  console.log(`mwLogger :: ${request.method} at ${request.url}`);
  next();
};
app.use(mwLogger);

// 5. Bind route definitions to the instance of Express (app)
bindRoutes(app);

// 6. Set your instance of express to listen on the given port
console.log("starting server...");
const PORT = process.env.PORT || 3004;
app.listen(PORT);
