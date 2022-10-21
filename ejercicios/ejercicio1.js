import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect();
async function run() {
  const restaurants = await Restaurant.find();
  console.log(restaurants);
}

run();
