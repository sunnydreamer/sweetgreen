const BASE_URL = "/api/dishes";

export async function allDishes() {
  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid");
  }
}

export async function getCategory(category) {
  const res = await fetch(`${BASE_URL}/${category}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid");
  }
}

export async function getOneDish(category, id) {
  const res = await fetch(`${BASE_URL}/${category}/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid");
  }
}

export async function createOneDish(dishData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dishData),
  });

  // Check if request was successful
  if (res.ok) {
    return res;
  } else {
    throw new Error("Invalid Create");
  }
}

export async function deleteDish(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(dishData),
  });

  if (res.ok) {
    return res;
  } else {
    throw new Error("Invalid Create");
  }
}

export async function updateDish(category, id, dishData) {
  const res = await fetch(`${BASE_URL}/${category}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dishData),
  });

  if (res.ok) {
    return res;
  } else {
    throw new Error("Invalid Create");
  }
}
