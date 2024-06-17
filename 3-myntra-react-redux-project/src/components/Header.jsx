import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import WomenSection from "./WomenSection";
import { HoverActionAction } from "../store/HoverAction";
import GentsSection from "./GentsSection";
import KidSection from "./KidSection";
const Header = () => {
  const bag = useSelector((store) => store.bag);
  const WishList = useSelector((store) => store.wishList);
  const setBag = new Set(bag);
  const setWish = new Set(WishList);

  let { women, men, kids } = useSelector((store) => store.HoverAction);

  const dispatch = useDispatch();

  const handleMouseEnterOverWomen = () => {
    dispatch(HoverActionAction.closeMenSection());
    dispatch(HoverActionAction.openTheWomenSection());
    dispatch(HoverActionAction.closeKidsSection());
  };

  const handleMouseEnterOverMen = () => {
    dispatch(HoverActionAction.closeTheWomenSection());
    dispatch(HoverActionAction.closeKidsSection());
    dispatch(HoverActionAction.openMenSection());
  };

  const handleMouseEnterOverKids = () => {
    dispatch(HoverActionAction.openKidsSection());
    dispatch(HoverActionAction.closeMenSection());
    dispatch(HoverActionAction.closeTheWomenSection());
  };
  const handleMouseEnterOverNav = () => {
    dispatch(HoverActionAction.showGrayScreen());
  };
  return (
    <>
      <header className="main-header">
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_logo"
              src="images/myntra_logo.webp"
              alt="myntra_logo"
            />
          </Link>
        </div>
        <nav className="nav_bar" onMouseEnter={handleMouseEnterOverNav}>
          <a id="Men" onMouseEnter={handleMouseEnterOverMen} href="#">
            Men
          </a>

          <a id="Women" onMouseEnter={handleMouseEnterOverWomen} href="#">
            Women
          </a>
          <a id="Kids" onMouseEnter={handleMouseEnterOverKids} href="#">
            Kids
          </a>
          <a id="Home" href="#">
            Home & Living
          </a>
          <a id="Beauty" href="#">
            Beauty
          </a>
          <a id="Studio" href="#">
            Studio <sup>New</sup>
          </a>
        </nav>

        <div className="search_bar">
          <span>
            {" "}
            <CiSearch />
          </span>
          <input placeholder="Search for products, brands and more" />
        </div>

        <div className="action_bar">
          <div className="action-container">
            <div className="action_icon">
              <IoPersonOutline />
            </div>

            <span>Profile</span>
          </div>

          <div className="action-container">
            <Link to={"/WishList"}>
              <div className="action_icon">
                <IoMdHeartEmpty />
              </div>
            </Link>
            <Link className="Bags_icon" to={"/WishList"}>
              <span>Wishlist</span>
            </Link>
            {WishList.length != 0 && (
              <span className="bag-item-count">{setWish.size}</span>
            )}
          </div>

          <div className="action-container">
            <Link to="/Bags">
              <div className="action_icon">
                <LiaShoppingBagSolid />
              </div>
            </Link>
            <Link to={"/Bags"} className="Bags_icon">
              <span>Bags</span>
            </Link>
            {bag.length != 0 && (
              <span className="bag-item-count">{setBag.size}</span>
            )}
          </div>
        </div>
      </header>
      <header className="section-header">
        <WomenSection WomenSectionOpen={women}></WomenSection>
        <GentsSection menSectionOpen={men}></GentsSection>
        <KidSection kidSectionOpen={kids}></KidSection>
      </header>
    </>
  );
};

export default Header;
