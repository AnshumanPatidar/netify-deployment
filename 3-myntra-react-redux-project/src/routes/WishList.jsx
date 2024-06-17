import React from "react";
import { useSelector } from "react-redux";
import WishListItem from "../components/WishListItem";
import EmptyBag from "../components/EmptyBag";

const WishList = () => {
  const homeItems = useSelector((store) => store.items);

  const wishlistId = useSelector((store) => store.wishList);
  const myset = new Set(wishlistId);
  console.log("setsize", myset.size);
  const myWishListBag = homeItems.filter((item) => {
    let itemIndex = wishlistId.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        {myset.size == 0 ? (
          <EmptyBag></EmptyBag>
        ) : (
          <>
            <div className="Wishlist_heading">
              My Wishlist{" "}
              <span className="wishlist_item_No">{myset.size} items</span>
            </div>
            <div className="wishList_items-container">
              {myWishListBag.map((item) => (
                <WishListItem key={item.id} item={item}></WishListItem>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default WishList;
