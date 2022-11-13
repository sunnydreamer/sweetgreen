import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createOneDish } from "../utilities/dishes-service";
import { useParams, useNavigate } from "react-router-dom";

function NewPage() {
  const categoryParam = useParams().category;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [category, setCategory] = useState(categoryParam);
  const [description, setDescription] = useState("");
  const [cal, setCal] = useState(0);
  const [price, setPrice] = useState(0);
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

      console.log("formData is");
      console.log(formData);

      // Send the data to our backend
      const newDish = await createOneDish(formData);

      // Log the data to the console
      navigate(`/${categoryParam}`);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  return (
    <div className="newPage">
      <div
        className="form-container"
        onSubmit={(e) => {
          return handleFormSubmission(e);
        }}
      >
        <h1>Add New Dish </h1>

        <form autoComplete="off">
          <label>Dish Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              return handleNameChange(e);
            }}
            value={name}
            required
            placeholder="Name"
          />
          <label>Picture Link</label>
          <input
            type="text"
            name="picture"
            onChange={(e) => {
              return handlePictureChange(e);
            }}
            value={picture}
            placeholder="Picture Link"
          />
          <label>Category</label>

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

          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => {
              return handleDescriptionChange(e);
            }}
            value={description}
            placeholder="Description"
          />
          <label>Cal</label>
          <input
            type="number"
            name="cal"
            onChange={(e) => {
              return handleCalChange(e);
            }}
            value={cal}
            required
            placeholder="Cal"
            min="0"
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            onChange={(e) => {
              return handlePriceChange(e);
            }}
            value={price}
            required
            placeholder="Confirm Password"
            min="0"
          />

          <button type="submit">Add Dish</button>
        </form>
      </div>

      <p className="error-message">{error}</p>
    </div>
  );
}

export default NewPage;
