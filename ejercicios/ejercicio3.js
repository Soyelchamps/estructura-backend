import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect();
async function run() {
  const restaurants = await Restaurant.find({ borough: "Bronx" }, {}).limit(5);
  console.log(restaurants);
}

run();
