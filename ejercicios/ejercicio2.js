import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect();
async function run() {
  const restaurants = await Restaurant.find(
    {},
    { _di: 1, name: 1, cuisine: 1, restaurant_id: 1, borough: 1 }
  );
  console.log(restaurants);
}

run();
