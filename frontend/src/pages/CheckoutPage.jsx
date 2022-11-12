import React from "react";

function CheckoutPage() {
  return (
    <div className="checkout">
      <div className="pageTitle">Finish up your pickup order</div>
      <form action="">
        <div className="formLeft">
          <div className="pickup">Pickup Details</div>
          <div className="payment">Payment Method</div>
        </div>
        <div className="formRight">
          <div className="myOrder">my order</div>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
