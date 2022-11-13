import React, { useState, useEffect } from "react";
import { getCategory } from "../utilities/dishes-service";

function CheckoutPage({ cart, setCart, page, setPage }) {
  console.log("cart page");
  const cartArr = Object.values(cart);
  console.log(cartArr);
  let sum = 0;

  const dishList =
    cartArr.length > 0 ? (
      cartArr.map((element, i) => {
        sum += element["quantity"] * element["price"];

        return (
          <div key={i}>
            <div className="orderDish">
              <div className="dishImg">
                <img src={element["img"]} alt="" />
              </div>
              <div className="dishInfo">
                <div className="dishName">Sweet Balsamic Brussels</div>
                <div className="dishCount">
                  <div
                    className="minus"
                    onClick={() => {
                      setCart((cart) => {
                        cart[element["id"]]["quantity"] -= 1;
                        if (cart[element["id"]]["quantity"] === 0) {
                          delete cart[element["id"]];
                        }

                        return cart;
                      });

                      page === true ? setPage(false) : setPage(true);
                    }}
                  >
                    -
                  </div>
                  <div className="count">{element["quantity"]}</div>
                  <div
                    className="plus"
                    onClick={() => {
                      setCart((cart) => {
                        cart[element["id"]]["quantity"] += 1;
                        return cart;
                      });
                      page === true ? setPage(false) : setPage(true);
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="dishPrice">
                ${(element["quantity"] * element["price"]).toFixed(2)}
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>Your cart is empty</div>
    );

  let tax = sum * 0.0625;
  let total = sum + tax;

  return (
    <div className="checkout">
      <div className="pageTitle">Finish up your pickup order</div>
      <form action="">
        <div className="formLeft">
          <div className="pickup">
            <div className="cardTitle">Pickup Details</div>
            <hr />
            <div className="cardItem">
              <img
                className="icon"
                src="https://cdn-icons-png.flaticon.com/512/3114/3114812.png"
                alt=""
              />
              <div className="cardDetail">Pickup Time: ASAP</div>
            </div>
            <hr style={{ color: "lightgray" }} />
            <div className="cardItem">
              <img
                className="icon"
                src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
                alt=""
              />
              <div className="cardDetail">
                Location: 244 Legacy Pl Dedham, MA 02026
              </div>
            </div>
            <hr style={{ color: "lightgray" }} />
            <div className="cardItem">
              <img
                className="icon"
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt=""
              />
              <div className="cardDetail">Sunny, (334) 930-3822</div>
            </div>
          </div>
          <div className="payment">
            <div className="cardTitle">Payment Method</div>
            <hr />
            <div className="cardItem">
              <img
                className="icon"
                src="https://cdn-icons-png.flaticon.com/512/121/121877.png"
                alt=""
              />
              <div className="cardDetail">Visa ending in 3445</div>
            </div>
            <hr style={{ color: "lightgray" }} />
            <div className="cardItem">
              <img
                className="icon"
                src="https://cdn-icons-png.flaticon.com/512/548/548427.png"
                alt=""
              />
              <div className="cardDetail">Enter Promo or gift card code</div>
            </div>
          </div>
        </div>
        <div className="formRight">
          <div className="cardTitle">Your Order</div>
          <hr />
          <div className="orderInfo">
            {/* loop start */}
            {dishList}
            {/* loop start */}
            <hr />

            <div className="price">
              <div className="priceItem">
                <div className="priceType">Subtotal</div>
                <div className="priceNum">${sum.toFixed(2)}</div>
              </div>
              <div className="priceItem">
                <div className="priceType">Tax</div>
                <div className="priceNum">${tax.toFixed(2)}</div>
              </div>
              <div className="priceItem" id="total">
                <div className="priceType">Total</div>
                <div className="priceNum">${total.toFixed(2)}</div>
              </div>
            </div>

            <div className="placeOrderBtn">Place Order</div>

            <div className="disclaimer">
              <p>
                <strong>Allergens Disclaimer </strong>
              </p>
              <p>
                At sweetgreen we use all major allergens in our kitchens, so we
                cannot guarantee that our food is completely free of any
                allergen. If you have a severe allergy, we recommend not
                ordering from our restaurant.
              </p>
              <p>
                <strong>Cancellation Policy</strong>
              </p>
              <p>
                No changes to the order can be made after placing your order.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
