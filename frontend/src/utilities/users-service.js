import * as usersAPI from "./users-api";

export async function signUp(userData) {
  // Make the network request
  const response = await usersAPI.signUp(userData);

  // Retrieve the token
  const data = response.data;

  // Add the token to the localstorage
  localStorage.setItem("data", JSON.stringify(data));

  // Baby step by returning whatever is sent back by the server

  console.log(response);
  return response;
}

// Create a function to login
export async function login(userData) {
  // Make a network request
  const response = await usersAPI.login(userData);

  // Retrieve token
  const data = response.data;

  // console.log(data);

  // Add token to localstorage
  localStorage.setItem("data", JSON.stringify(data));

  // Return response
  return response;
}

// Create a function to logout
export const logOut = () => {
  localStorage.removeItem("data");
};

// Create a function to retrieve jwt from local storage
export const getToken = () => {
  // Reach out to local storage and look for a token
  const token = JSON.parse(localStorage.getItem("data"))?.token;

  // console.log(token);

  // Assuming no token was found
  if (!token) return null;

  // If the function reaches this point of the code that mean a token was found
  const payload = JSON.parse(atob(token.split(".")[1]));

  // Verify that the decoded payload is not expired
  if (payload.exp < Number.parseInt(Date.now() / 1000)) {
    // Meaning the jwt has expired
    localStorage.removeItem("data");

    // return early
    return null;
  }

  // Again if the code gets to this line it means that there was a token and the token was valid
  return token;
};

export const getUser = () => {
  const token = getToken();

  return token ? JSON.parse(localStorage.getItem("data")) : null;
};
