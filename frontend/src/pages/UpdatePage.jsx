import React, { useState, useEffect } from "react";
import { updateDish, getOneDish } from "../utilities/dishes-service";
import { useParams, useNavigate } from "react-router-dom";

function UpdatePage() {
  //set up navigate
  const navigate = useNavigate();

  // get params
  const categoryParam = useParams().category;
  const idParam = useParams().id;

  //get the dish info
  const [dish, setDish] = useState({});
  const getDish = async (e) => {
    const onedish = await getOneDish(category, idParam);
    setDish(onedish.data.dishes[0]);
  };

  const [name, setName] = useState(dish.name);
  const [picture, setPicture] = useState(dish.picture);
  const [category, setCategory] = useState(categoryParam);
  const [description, setDescription] = useState(dish.description);
  const [cal, setCal] = useState(dish.cal);
  const [price, setPrice] = useState(dish.price);
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePictureChange = (e) => {
    setPicture(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleCalChange = (e) => {
    setCal(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleErrorChange = (e) => {
    setError(e.target.value);
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();

    // Retrieve state
    const state = {
      name,
      picture,
      category,
      description,
      cal,
      price,
      error,
    };

    try {
      // Make a copy of our data
      const formData = { ...state };
      delete formData["error"];

      // Send the data to our backend
      const newDish = await updateDish(categoryParam, idParam, formData);

      // Log the data to the console
      navigate(`/${category}/${idParam}`);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  // useEffect
  useEffect(() => {
    getDish();
  }, []);
  return (
    <div className="newPage">
      <div
        className="form-container"
        onSubmit={(e) => {
          return handleFormSubmission(e);
        }}
      >
        <h1>Update Dish</h1>

        <form autoComplete="off">
          <div className="formItem">
            <label className="formItemName">Dish Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                return handleNameChange(e);
              }}
              defaultValue={dish.name}
              required
              className="formItemContent"
            />
          </div>
          <div className="formItem">
            <label className="formItemName">Picture Link</label>
            <input
              type="text"
              name="picture"
              onChange={(e) => {
                return handlePictureChange(e);
              }}
              defaultValue={dish.picture}
              placeholder="Picture Link"
              className="formItemContent"
            />
          </div>
          <div className="formItem">
            <label className="formItemName">Category</label>
            <div className="formItemContent" id="radio">
              <input
                type="radio"
                id="featured"
                name="category"
                value="featured"
                onChange={(e) => {
                  return handleCategoryChange(e);
                }}
                required
                checked={category === "featured"}
              />
              <label htmlFor="featured">Featured</label>
              <input
                type="radio"
                id="warmbowls"
                name="category"
                value="warmbowls"
                onChange={(e) => {
                  return handleCategoryChange(e);
                }}
                required
                checked={category === "warmbowls"}
              />
              <label
                htmlFor="warmbowls"
                onChange={(e) => {
                  return handleCategoryChange(e);
                }}
              >
                Warm Bowls
              </label>

              <input
                type="radio"
                id="salads"
                name="category"
                value="salads"
                onChange={(e) => {
                  return handleCategoryChange(e);
                }}
                required
                checked={category === "salads"}
              />
              <label htmlFor="salads">Salads</label>
              <input
                type="radio"
                id="custom"
                name="category"
                value="custom"
                onChange={(e) => {
                  return handleCategoryChange(e);
                }}
                required
                checked={category === "custom"}
              />
              <label htmlFor="custom">Custom</label>
              <input
                type="radio"
                id="sides"
                name="category"
                value="sides"
                onChange={(e) => {
                  return handleCategoryChange(e);
                }}
                required
                checked={category === "sides"}
              />
              <label htmlFor="sides">Sides</label>
              <input
                type="radio"
                id="dessert"
                name="category"
                value="dessert"
                onChange={(e) => {
                  return handleCategoryChange(e);
                }}
                required
                checked={category === "dessert"}
              />
              <label htmlFor="dessert">Dessert</label>
              <input
                type="radio"
                id="beverages"
                name="category"
                value="beverages"
                onChange={(e) => {
                  return handleCategoryChange(e);
                }}
                required
                checked={category === "beverages"}
              />
              <label htmlFor="beverages">Beverages</label>
            </div>
          </div>

          <div className="formItem">
            <label className="formItemName">Description</label>
            <textarea
              type="text"
              name="description"
              onChange={(e) => {
                return handleDescriptionChange(e);
              }}
              defaultValue={dish.description}
              className="formItemContent"
            />
          </div>
          <div className="formItem">
            <label className="formItemName">Cal</label>
            <input
              type="number"
              name="cal"
              onChange={(e) => {
                return handleCalChange(e);
              }}
              defaultValue={dish.cal}
              required
              min="0"
              className="formItemContent"
            />
          </div>
          <div className="formItem">
            <label className="formItemName">Price</label>
            <input
              type="number"
              name="price"
              onChange={(e) => {
                return handlePriceChange(e);
              }}
              defaultValue={dish.price}
              required
              min="0"
              className="formItemContent"
            />
          </div>

          <button type="submit">Add Dish</button>
        </form>
      </div>

      <p className="error-message">{error}</p>
    </div>
  );
}

export default UpdatePage;
