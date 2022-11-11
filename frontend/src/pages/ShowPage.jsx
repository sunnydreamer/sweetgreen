import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneDish } from "../utilities/dishes-service";

function ShowPage() {
  const { id } = useParams();
  const { category } = useParams();
  const [dish, setDish] = useState({});

  const getDish = async (e) => {
    const onedish = await getOneDish(category, id);
    setDish(onedish.data.dishes[0]);
  };
  useEffect(() => {
    getDish();
  }, []);
  // console.log(dish);

  return (
    <div className="showPage">
      <div className="showPageLeft">
        <div className="itemName">{dish.name}</div>
        <div className="itemInfo">
          ${dish.price} - {dish.cal} cal
        </div>
        <div className="details">
          <p>{dish.description}</p>
          <div className="detailTitle">Dressing</div>
          <hr />
          <div className="detailTitle">Cranberry Maple Vinaigrette</div>
          <hr />
          <div className="detailTitle">Add bread (100 cal)</div>
          <hr />
          <div className="detailTitle">Quantity</div>
        </div>
        <div className="buttons">
          <div className="btn" id="customize">
            Customize
          </div>
          <div className="btn" id="cart">
            Add to Bag
          </div>
        </div>
      </div>
      <div className="showPageRight">
        <img src={dish.picture} alt="" />
      </div>
    </div>
  );
}

export default ShowPage;
