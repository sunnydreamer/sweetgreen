import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneDish, deleteDish } from "../utilities/dishes-service";

function ShowPage({ setCart, cart, page, setPage, user }) {
  const { id } = useParams();
  const { category } = useParams();
  const navigate = useNavigate();
  const [dish, setDish] = useState({});
  const [quantity, setQuantity] = useState(1);

  const getDish = async (e) => {
    const onedish = await getOneDish(category, id);
    setDish(onedish.data.dishes[0]);
  };

  const handleMinus = async (e) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = async (e) => {
    setQuantity(quantity + 1);
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
          <div className="detail">
            <div className="detailTitle">Dressing</div>
            <hr />
          </div>

          <div className="detail">
            <div className="detailTitle">Cranberry Maple Vinaigrette</div>
            <hr />
          </div>

          <div className="detail">
            <div className="detailTitle">Add bread (100 cal)</div>
            <hr />
          </div>

          <div className="detail" id="quantity">
            <div className="detailTitle">Quantity </div>
            <div className="detalContent">
              <div className="minus" onClick={handleMinus}>
                -
              </div>
              <div className="count">{quantity}</div>
              <div className="plus" onClick={handlePlus}>
                +
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          {user && user.currentUser.isAdmin ? (
            <div
              className="btn"
              id="edit"
              onClick={() => {
                navigate(`/${category}/${id}/update`);
              }}
            >
              Edit
            </div>
          ) : (
            <div className="btn" id="customize">
              Customize
            </div>
          )}
          {user && user.currentUser.isAdmin ? (
            <div
              className="btn"
              id="delete"
              onClick={() => {
                deleteDish(id);
                navigate(`/${category}`);
              }}
            >
              Delete
            </div>
          ) : (
            <div
              className="btn"
              id="cart"
              onClick={() => {
                if (cart[dish._id] !== undefined) {
                  setCart((cart) => {
                    cart[dish._id]["quantity"] += quantity;
                    return cart;
                  });
                  page === true ? setPage(false) : setPage(true);
                } else {
                  setCart({
                    ...cart,
                    [dish._id]: {
                      id: dish._id,
                      name: dish.name,
                      quantity: quantity,
                      img: dish.picture,
                      price: dish.price,
                    },
                  });
                }
              }}
            >
              Add to Bag
            </div>
          )}
        </div>
      </div>
      <div className="showPageRight">
        <img src={dish.picture} alt="" />
      </div>
    </div>
  );
}

export default ShowPage;
