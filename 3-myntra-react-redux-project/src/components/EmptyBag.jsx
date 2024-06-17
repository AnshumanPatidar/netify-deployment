import React from "react";
import { Link } from "react-router-dom";

const EmptyBag = () => {
  return (
    <>
      <main>
        <div className="empty-page">
          <div className="empty-image-container">
            <img
              className="empty-image"
              src="images/empty-bag.webp"
              alt="image is not loaded"
            />
          </div>
          <div className="empty-msg-part2">
            <span className="feels-light-msg">Hey, it feels so light!</span>
            <span className="nothing-in-your-bag-msg2">
              There is nothing in here. Let's add some items.
            </span>
            <Link to={"/"}>
              <button className="btn-Back-to-home">Lets add some items</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default EmptyBag;
