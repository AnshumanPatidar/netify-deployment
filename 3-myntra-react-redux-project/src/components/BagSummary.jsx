import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagSummarySliceAction } from "../store/bagSummary";

const BagSummary = () => {
  let CONVENIENCE_FEES = 0;
  const bag = useSelector((store) => store.bag);
  let { totalMRP, totalAmount, total_discount } = useSelector(
    (store) => store.BagSummary
  );
  const items = useSelector((store) => store.items);
  const dispatch = useDispatch();

  const BagSummaryItem = items.filter((item) => {
    let itemIndex = bag.indexOf(item.id);
    return itemIndex >= 0;
  });

  dispatch(bagSummarySliceAction.giveTotalMRP(BagSummaryItem));
  dispatch(bagSummarySliceAction.giveTotalDiscount(BagSummaryItem));
  dispatch(bagSummarySliceAction.giveTotalAmount());

  BagSummaryItem.length == 0 ? (CONVENIENCE_FEES = 0) : (CONVENIENCE_FEES = 99);
  totalAmount += CONVENIENCE_FEES;

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({bag.length}) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{total_discount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">
            {" "}
            ₹{bag.length && CONVENIENCE_FEES}
          </span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹ {totalAmount}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default BagSummary;
