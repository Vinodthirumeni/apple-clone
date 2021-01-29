import React from "react";
import "./Banner.css";
import AppleIcon from "@material-ui/icons/Apple";
function Banner({
  img,
  title1,
  titleMid,
  title2,
  title3,
  title4,
  title5,
  css,
  space,
  titleSpace,
  logo,
  href1,
  href2,
  hrefMain,
}) {
  return (
    <a href={hrefMain}>
      <div className="banner">
        <div
          className={`bannerText ${titleSpace === "titleSpace" ? "S1" : ""}`}
        >
          <p className={`bannerTitle1 ${css === "white" ? "T1" : ""}`}>
            {logo && <AppleIcon />}
            {title1}
          </p>
          <p className="bannerTitleMid">{titleMid}</p>
          <p className={`bannerTitle2 ${css === "white" ? "T2" : ""}`}>
            {title2}
          </p>
          <p className="bannerTitle3">{title3}</p>
          <div className={`bannerBuyText ${space === "space" ? "L1" : ""}`}>
            <a href={href1} className="bannerTitle4">
              {title4}
            </a>
            <a href={href2} className="bannerTitle5">
              {title5}
            </a>
          </div>
        </div>
        <img src={img} alt="#banner" />
      </div>
    </a>
  );
}
export default Banner;