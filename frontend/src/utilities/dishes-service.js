import * as dishesAPI from "./dishes-api";

export async function allDishes() {
  const response = await dishesAPI.allDishes();
  return response;
}

export async function getCategory(category) {
  const response = await dishesAPI.getCategory(category);
  return response;
}

export async function getOneDish(category, id) {
  const response = await dishesAPI.getOneDish(category, id);
  return response;
}

export async function createOneDish(dishData) {
  // Make the network request
  const response = await dishesAPI.createOneDish(dishData);
  // Baby step by returning whatever is sent back by the server
  return response;
}

export async function deleteDish(id) {
  // Make the network request
  const response = await dishesAPI.deleteDish(id);
  // Baby step by returning whatever is sent back by the server
  return response;
}

export async function updateDish(category, id, dishData) {
  // Make the network request
  const response = await dishesAPI.updateDish(category, id, dishData);
  // Baby step by returning whatever is sent back by the server
  return response;
}
