import React from "react";
import { useDispatch } from "react-redux";
import { HoverActionAction } from "../store/HoverAction";

const GentsSection = ({ menSectionOpen }) => {
  const dispatch = useDispatch();
  const handleOnMouseLeaveGents = () => {
    dispatch(HoverActionAction.closeMenSection());
  };

  return (
    <>
      {menSectionOpen && (
        <div className="men-sub-menu" onMouseLeave={handleOnMouseLeaveGents}>
          <ul className="list">
            <span className="section-heading-men">Topwear</span>
            <li>T-Shirts</li>
            <li>Casual Shirts</li>
            <li>Formal Shirts</li>
            <li>Sweatshirts</li>
            <li>Sweaters</li>
            <li>Blazers & Coats</li>
            <li>Jackets</li>
            <li>Rain Jackets</li>
            <hr className="line" />
            <span className="section-heading-men"> Indian & Festive Wear</span>
            <li>Kurtas & Kurta Sets</li>
            <li>Sherwanis</li>
            <li>Nehru Jackets</li>
            <li>Dhotis</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default GentsSection;
