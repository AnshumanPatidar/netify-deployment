import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
import EmptyBag from "../components/EmptyBag";

const Bags = () => {
  const bagitem = useSelector((store) => store.bag);
  const item = useSelector((store) => store.items);

  const FinalItems = item.filter((item) => {
    let itemIndex = bagitem.indexOf(item.id); // return -1 if false , >= 0 if true
    return itemIndex >= 0;
  });

  console.log("finalitem", FinalItems.length);

  return (
    <>
      <main>
        {FinalItems.length == 0 ? (
          <EmptyBag />
        ) : (
          <div className="bag-page">
            <div className="bag-items-container">
              {FinalItems.map((items) => (
                <BagItem items={items}></BagItem>
              ))}
            </div>
            <div className="bag-summary">
              <BagSummary></BagSummary>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Bags;
