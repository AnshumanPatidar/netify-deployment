import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HoverActionAction } from "../store/HoverAction";

const GrayScreen = () => {
  const { nav } = useSelector((store) => store.HoverAction);

  const dispatch = useDispatch();

  const handleMouseEnterInMain = () => {
    if (nav === true) dispatch(HoverActionAction.hideGrayScreen());
  };

  return (
    <>
      {" "}
      <main>
        <div onMouseEnter={handleMouseEnterInMain} className="GrayScreen"></div>
      </main>
    </>
  );
};

export default GrayScreen;
