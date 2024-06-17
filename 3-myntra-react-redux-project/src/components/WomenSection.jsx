import React from "react";
import { useDispatch } from "react-redux";
import { HoverActionAction } from "../store/HoverAction";

const WomenSection = ({ WomenSectionOpen }) => {
  const dispatch = useDispatch();
  const handleOnMouseLeaveGents = () => {
    dispatch(HoverActionAction.closeTheWomenSection());
  };

  return (
    <>
      {WomenSectionOpen && (
        <div className="women-sub-menu" onMouseLeave={handleOnMouseLeaveGents}>
          <ul className="list">
            <span className="section-heading-women">Indian & fusion wear</span>
            <li>Kurtas & Suits</li>
            <li>Kurtis, Tunics & Tops</li>
            <li>Sarees</li>
            <li>Ethnic Wear</li>
            <li>Leggings & Salwars </li>
            <li>Skirts & Palazzos</li>
            <li>Dress Materials</li>
            <li>Lehenga Cholis</li>
            <li>Dupattas & Shawls</li>
            <li>Jackets</li>
          </ul>
          <hr className="line" />
          <ul>
            <span className="section-heading-women">Belts, Scarves & More</span>
            <br />
            <span className="section-heading">Watches & Wearables</span>
          </ul>
        </div>
      )}
    </>
  );
};

export default WomenSection;
