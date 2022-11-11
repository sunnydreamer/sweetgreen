import React, { useState, useEffect } from "react";
import { getCategory } from "../utilities/dishes-service";
import { Link, useParams } from "react-router-dom";

function CategoryPage({ page }) {
  const { category } = useParams();
  const pageName = category[0].toUpperCase() + category.slice(1);
  const [dishes, setDishes] = useState({ list: [] });

  const getAllDishes = async (e) => {
    const alldishes = await getCategory(category);

    console.log(alldishes);

    setDishes({
      list: alldishes.data.dishes,
    });
  };
  useEffect(() => {
    getAllDishes();
  }, [page]);

  const dishList = dishes.list
    ? dishes.list.map((element, i) => {
        return (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/${category}/${element._id}`}
            key={i}
          >
            <div className="itemCard">
              <div className="itemImgContainer">
                <img src={element.picture} alt="" className="itemImg" />
              </div>
              <div className="itemName"> {element.name}</div>
              <div className="itemDescription">{element.description}</div>
              <div className="infoContainer">
                ${element.price} - {element.cal}cal
              </div>
            </div>
          </Link>
        );
      })
    : [];

  return (
    <div className="categoryPage">
      <div className="pageTitle">{pageName}</div>
      <div className="itemCards">{dishList}</div>
    </div>
  );
}

export default CategoryPage;
