import React from "react";
import "./Body.css";
import Banner from "./Banner";
import QuadBody from "./QuadBody";
import Banner1 from "../../components/images/banner1.png";
import Banner2 from "../../components/images/banner2.png";
import Banner3 from "../../components/images/banner3.png";
import Quad1 from "../../components/images/quad1.jpg";
import Quad2 from "../../components/images/quad2.jpg";
import Quad3 from "../../components/images/quad3.jpg";
import Quad4 from "../../components/images/quad4.jpg";
import Quad5 from "../../components/images/quad5.jpg";
import Quad6 from "../../components/images/quad6.jpg";
function Body() {
  return (
    <div className="body">
      <div className="bodyBanner">
        <Banner
          img={Banner1}
          title1="iPhone 12"
          title2="Blast past fast"
          title3="From ₹8227/month1 or ₹69900* before trade‑in"
          title4="Learn more"
          title5="Buy"
          titleSpace="titleSpace"
          href1="https://www.apple.com/in/iphone-12/"
          href2="https://www.apple.com/in/shop/goto/buy_iphone/iphone_12"
          hrefMain="https://www.apple.com/in/iphone-12/"
        />
        <Banner
          img={Banner2}
          title1="iPhone 12 Pro"
          title2="It’s a leap year."
          title3="From ₹14111/month2 or ₹119900* before trade‑in"
          title4="Learn more"
          title5="Buy"
          css="white"
          href1="https://www.apple.com/in/iphone-12-pro/"
          href2="https://www.apple.com/in/shop/goto/buy_iphone/iphone_12_pro"
          hrefMain="https://www.apple.com/in/iphone-12-pro/"
        />
        <Banner
          img={Banner3}
          title1="iWatch"
          titleMid="Series 6"
          title2="The future of health is on your wrist"
          title4="Learn more"
          title5="Buy"
          css="white"
          space="space"
          logo="logo"
          href1="https://www.apple.com/in/apple-watch-series-6/"
          href2="https://www.apple.com/in/shop/goto/apple_watch"
          hrefMain="https://www.apple.com/in/apple-watch-series-6/"
        />
      </div>
      <div className="bodyQuadBanner">
        <div className="bodyQuadBannerBody">
          <QuadBody
            img={Quad1}
            section="Quad1"
            href1="https://www.apple.com/in/airpods-max/"
            href2="https://www.apple.com/in/shop/goto/buy_airpods/airpods_max"
            hrefMain="https://www.apple.com/in/airpods-max/"
          />
          <QuadBody
            img={Quad2}
            section="Quad2"
            href1="https://www.apple.com/in/macbook-air/"
            href2="https://www.apple.com/in/shop/goto/buy_mac/macbook_air"
            hrefMain="https://www.apple.com/in/macbook-air/"
          />
        </div>
        <div className="bodyQuadBannerBody">
          <QuadBody
            img={Quad3}
            section="Quad3"
            hrefMain="https://www.apple.com/in/education/college-students/"
            href1="https://www.apple.com/in/education/college-students/"
          />
          <QuadBody
            img={Quad4}
            section="Quad4"
            hrefMain="https://www.apple.com/in/privacy/"
            href1="https://www.apple.com/in/privacy/"
          />
        </div>
        <div className="bodyQuadBannerBody">
          <QuadBody
            img={Quad5}
            section="Quad5"
            hrefMain="https://www.apple.com/in/shop/goto/gifts/valentines_day"
            href1="https://www.apple.com/in/shop/goto/gifts/valentines_day"
          />
          <QuadBody
            img={Quad6}
            section="Quad6"
            hrefMain="https://tv.apple.com/in/show/umc.cmc.1h3msl5cfif0fz9my2kgvtk36?itscg=10000&itsct=atv-0-apl_hp-pmo_wch-losingalice-201104"
            href1="https://tv.apple.com/in/show/umc.cmc.1h3msl5cfif0fz9my2kgvtk36?itscg=10000&itsct=atv-0-apl_hp-pmo_wch-losingalice-201104"
            href2="https://tv.apple.com/in/show/umc.cmc.1h3msl5cfif0fz9my2kgvtk36?itscg=10000&itsct=atv-0-apl_hp-pmo_wch-losingalice-201104"
          />
        </div>
      </div>
    </div>
  );
}
export default Body;