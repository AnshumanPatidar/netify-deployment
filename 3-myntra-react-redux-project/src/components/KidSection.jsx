import React from "react";
import { useDispatch } from "react-redux";
import { HoverActionAction } from "../store/HoverAction";

const KidSection = ({ kidSectionOpen }) => {
  const dispatch = useDispatch();
  const handleOnMouseLeaveKids = () => {
    dispatch(HoverActionAction.closeKidsSection());
  };
  return (
    <>
      {kidSectionOpen && (
        <div className="kids-sub-menu" onMouseLeave={handleOnMouseLeaveKids}>
          <ul className="list">
            <span className="section-heading-kids">Topwear</span>
            <li>T-Shirts</li>
            <li>Casual Shirts</li>
            <li>Formal Shirts</li>
            <li>Sweatshirts</li>
            <li>Sweaters</li>
            <li>Blazers & Coats</li>
            <li>Jackets</li>
            <li>Rain Jackets</li>
            <hr className="line" />
            <span className="section-heading-kids"> Indian & Festive Wear</span>
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

export default KidSection;
