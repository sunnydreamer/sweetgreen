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
