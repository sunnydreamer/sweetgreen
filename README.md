# Sweetgreen Full Mern APP

An online food ordering system built with the MERN stack.

Design inpiration by [Sweetgreen](https://www.sweetgreen.com/).

## Tech/framework used

<b>Built with:</b>

- React JS
- MongoDB
- SCSS
- Boostrap

## Features

This application provides users with the following features:
<br/>

- Authentication using **JWT Tokens**
- Customers can browse, add products to their cart, and purchase the meals
- Admin portal enables admin accounts to create, update and delete the dishes

## Screenshots

#### Home Page

![Home Page](https://i.imgur.com/rnFG0xs.jpg)
<br/><br/>

#### Category Page

![Category Page](https://i.imgur.com/qIs9dHq.jpg)
<br/><br/>

#### Product Show Page

![Product Show Page](https://i.imgur.com/sJ8q6eo.jpg)
<br/><br/>

#### Shopping Cart

![Shopping Cart](https://i.imgur.com/H6tS8eA.jpg)

## Installation

1. Make sure [Node and npm](https://nodejs.org/en/download/) are installed

   ```
   $ node --version
   v16.16.0

   $ npm --version
   8.11.0
   ```

2. Clone the repo, type

   ```
   $ git clone {the url to the GitHub repo}
   ```

3. cd into the root folder and install the required dependencies

   ```
   $ npm install
   ```

4. cd into the frontend folder and install the required dependencies

   ```
   $ .../frontend> npm install
   ```

5. Create .env file in root folder

   ```
   $ touch .env
   ```

   In your .env file, type

   ```
   DATABASE= {your mongoDB database link}
   // replace the password with <PASSWORD>
   DATABASE_PASSWORD= {your mongoDB database password}

   JWT_SECRET_KEY={your jwt secret key}
   JWT_EXPIRATION_DATE=90d
   ```

6. To run the React Project

   ```
   $ npm run dev
   ```

## Unsolved Problem

- **Order Model Implementation** When customers place orders, the order information will be created and stored in the order database. Orders information can be reviewed and updated by admin accounts.

- **Search Bar** Import search bar that enables customers to find their dishes ASAP.

- **Customized Add-Ons** Customers can customize their own bowls.

## Contribute

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

MIT © [sunnydreamer](https://github.com/sunnydreamer)
