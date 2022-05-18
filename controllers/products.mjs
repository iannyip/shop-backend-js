// 1. This module exports the controller - a function which returns a set of functions
export default function initProductController(db) {
  // 2. Each async function takes in a request and response object
  const index = (request, response) => {
    try {
      response.send("inside index method of product controller");
    } catch (error) {
      console.log(error);
    }
  };

  const show = (request, response) => {
    try {
      response.send("inside show method of product controller");
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
