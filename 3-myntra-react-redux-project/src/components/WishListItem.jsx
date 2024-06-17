import React from "react";
import { useDispatch } from "react-redux";
import { bagSliceAction } from "../store/bag";
import { RxCross2 } from "react-icons/rx";
import { wishListAction } from "../store/WishList";

const WishListItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagSliceAction.addToBag(item.id));
  };

  const handleRemoveFromWishList = () => {
    dispatch(wishListAction.removeFromWishList(item.id));
  };

  return (
    <>
      <div className="item-container">
        <div onClick={handleRemoveFromWishList} className="wishList_icon">
          <RxCross2 />
        </div>
        <img className="item-image" src={item.image} alt="item-image" />

        <div className="item-info">
          <div className="WishList-item-name">{item.item_name}</div>
          <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">
              {" "}
              ({item.discount_percentage}% off){" "}
            </span>
          </div>
        </div>
        <button className="btn-add-bag" onClick={handleAddToBag}>
          Move to Bag
        </button>
      </div>
    </>
  );
};

export default WishListItem;
