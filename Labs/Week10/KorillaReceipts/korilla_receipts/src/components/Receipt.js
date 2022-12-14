import React from "react";

function receipt(props) {
  return (
    <>
      <div className="orderList">
        <h2 className="receiptTitle">{props.receipt.person}</h2>

        <div className="listItem"> Order:{props.receipt.order.main}</div>
        <div className="listItem">Protein: {props.receipt.order.protein}</div>
        <div className="listItem"> Rice: {props.receipt.order.rice}</div>
        <div className="listItem"> Sauce: {props.receipt.order.sauce}</div>

        <div className="listItem">
          {" "}
          Toppings: {props.receipt.order.toppings}
        </div>
      </div>
    </>
  );
}

export default receipt;