const Dish = require("./../../models/dishModel");
const dishData = require("./../../data/dishData");

// Define a route handler for creating users
exports.seedDish = async (request, response) => {
  try {
    const newDish = await Dish.insertMany(dishData.data);

    response.status(201).json({
      status: "success",
      data: {
        newDish,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.createOneDish = async (request, response) => {
  try {
    const newDish = await Dish.create({
      name: request.body.name,
      picture: request.body.picture,
      category: request.body.category,
      description: request.body.description,
      cal: request.body.cal,
      price: request.body.price,
    });

    response.status(201).json({
      status: "success",
      data: {
        newDish,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.deleteDish = async (request, response) => {
  try {
    const deletedDish = await Dish.findByIdAndRemove(request.params.id);

    response.status(201).json({
      status: "success",
      data: {
        deletedDish,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.updateDish = async (request, response) => {
  try {
    const updatedDish = await Dish.findByIdAndUpdate(
      request.params.id,
      request.body
    );

    response.status(201).json({
      status: "success",
      data: {
        updatedDish,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      error: error,
    });
  }
};

exports.getAllDishes = async (request, response) => {
  try {
    const dishes = await Dish.find();

    // Assuming no user if found with that id
    if (!dishes) {
      throw new Error("No user found with that id");
    }

    // Send response
    response.status(200).json({
      status: "success",
      data: {
        dishes,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getCategory = async (request, response) => {
  try {
    const dishes = await Dish.find({ category: request.params.category });

    // Send response
    response.status(200).json({
      status: "success",
      data: {
        dishes,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getOneDish = async (request, response) => {
  try {
    const dishes = await Dish.find({ _id: request.params.id });

    if (!dishes) {
      throw new Error("No dish found with that id");
    }

    // Send response
    response.status(200).json({
      status: "success",
      data: {
        dishes,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
