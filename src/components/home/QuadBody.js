import React from "react";
import "./QuadBody.css";
import AppleIcon from "@material-ui/icons/Apple";
function QuadBody({ img, section, href1, href2, hrefMain }) {
  return (
    <div className="quadBody">
      <a href={hrefMain}>
        <img src={img} alt="#QuadBody" />
      </a>
      {section === "Quad1" && (
        <div className="quadbodyText1">
          <p>AirPods Max</p>
          <div className="quadbodySubText1">
            <a href={href1}>Learn more</a>
            <a href={href2}>Buy</a>
          </div>
        </div>
      )}
      {section === "Quad2" && (
        <div className="quadbodyText2">
          <p>MacBook Air</p>
          <p>Power.It's in the Air.</p>
          <div className="quadbodySubText2">
            <a href={href1}>Learn more</a>
            <a href={href2}>Buy</a>
          </div>
        </div>
      )}
      {section === "Quad3" && (
        <div className="quadbodyText3">
          <p>Apple for University</p>
          <p>The most powerful devices for learning.And whatever's next.</p>
          <div className="quadbodySubText3">
            <a href={href1}>Learn more</a>
          </div>
        </div>
      )}
      {section === "Quad4" && (
        <div className="quadbodyText4">
          <AppleIcon />
          <p>Privacy</p>
          <p>What you share should be up to you.</p>
          <div className="quadbodySubText4">
            <a href={href1}>Learn more</a>
          </div>
        </div>
      )}
      {section === "Quad5" && (
        <div className="quadbodyText5">
          <AppleIcon />
          <p>Gift for Valentines's Day</p>
          <p>For lovers of Apple.</p>
          <div className="quadbodySubText5">
            <a href={href1}>Shop gifts</a>
          </div>
        </div>
      )}
      {section === "Quad6" && (
        <div className="quadbodyText6">
          <AppleIcon />
          <p>tv+</p>
          <p>LOSING</p>
          <p>ALICE</p>
          <div className="quadbodySubText6">
            <a href={href1}>Not all fantasies are fiction.</a>
            <a href={href2}>Watch Now</a>
          </div>
        </div>
      )}
    </div>
  );
}
export default QuadBody;