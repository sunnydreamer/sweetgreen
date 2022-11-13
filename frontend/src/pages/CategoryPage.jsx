import React, { useState, useEffect } from "react";
import { getCategory, deleteDish } from "../utilities/dishes-service";
import { Link, useParams, useNavigate } from "react-router-dom";

function CategoryPage({ page, user, setPage }) {
  const navigate = useNavigate();
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

  const deleteOneDish = async (id) => {
    await deleteDish(id);
    page === true ? setPage(false) : setPage(true);

    // maybe redirect
  };

  useEffect(() => {
    getAllDishes();
  }, [page]);

  const dishList = dishes.list
    ? dishes.list.map((element, i) => {
        return (
          <div key={i}>
            <div className="itemCard">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/${category}/${element._id}`}
              >
                <div className="itemImgContainer">
                  <img src={element.picture} alt="" className="itemImg" />
                </div>
                <div className="itemName"> {element.name}</div>
                <div className="itemDescription">{element.description}</div>
                <div className="infoContainer">
                  ${element.price} - {element.cal}cal
                </div>
              </Link>
              {user && user.currentUser.isAdmin ? (
                <div
                  className="deleteBtn"
                  onClick={() => {
                    deleteOneDish(element._id);
                    navigate(`/${category}`);
                  }}
                >
                  DELETE
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      })
    : [];

  return (
    <div className="categoryPage">
      <div className="pageTitle">{pageName}</div>
      <div className="itemCards">
        {user && user.currentUser.isAdmin ? (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/${category}/new`}
          >
            <div className="itemCard" id="addDish">
              <div className="itemImgContainer">
                <div className="itemName">Add Dish</div>
                <img
                  src="https://cdn.icon-icons.com/icons2/1206/PNG/512/1491254405-plusaddmoredetail_82972.png"
                  alt=""
                  className="addImg"
                />
              </div>
            </div>
          </Link>
        ) : (
          <></>
        )}
        {dishList}
      </div>
    </div>
  );
}

export default CategoryPage;
