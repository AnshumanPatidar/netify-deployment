import { useDispatch, useSelector } from "react-redux";
import { bagSliceAction } from "../store/bag";
import { IoMdHeartEmpty } from "react-icons/io";
import { wishListAction } from "../store/WishList";

const HomeItem = ({ item }) => {
  const bag = useSelector((store) => store.bag);
  const wishList = useSelector((store) => store.wishList);
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagSliceAction.addToBag(item.id));
  };

  const handleAddToWishList = () => {
    dispatch(wishListAction.addToWishList(item.id));
  };
  return (
    <>
      <div className="item-container">
        <div onClick={handleAddToWishList} className="wishList_icon">
          <IoMdHeartEmpty />
        </div>
        <div className="rating">
          {item.rating.stars} ⭐| {item.rating.count}
        </div>
        <img className="item-image" src={item.image} alt="item-image" />

        <div className="item-info">
          <div className="company">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">
              {" "}
              ({item.discount_percentage}% off){" "}
            </span>
          </div>
        </div>
        <button onClick={handleAddToBag} className="btn-add-bag">
          Add to Bag
        </button>
      </div>
    </>
  );
};

export default HomeItem;
