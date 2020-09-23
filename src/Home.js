import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon"
        />
        <div className="home__row">
          <Product
            id={23435353}
            title="Google Pixel 4a"
            price={349}
            image="https://fdn.gsmarena.com/imgroot/news/20/08/pixel-4a-5g-renders/-727/gsmarena_003.jpg"
            rating={5}
          />
          {/* Product */}
          <Product
            id={2367456}
            title="Fitbit Advanced Health Smartwatch | Fitbit Sense"
            price={279.95}
            image="https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/sense/hero-static/carbon/sense-HeroStatic-carbon-side.png"
            rating={5}
          />

          <Product
            id={2366675}
            title="Philips Automatic Rice Cooker"
            price={76.99}
            image="https://www.nytimes.com/wirecutter/wp-content/uploads/2018/07/ricecookers-lowres-9369.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          {" "}
          <Product
            id={2367456}
            title="TCL 65 Inch C6 Smart QUHD 4K Android LED TV - 65C6US - Harman Kardon"
            price={1067.5}
            image="https://d12prgon3aw7l1.cloudfront.net/2355658_251-339-main_1600x1200.jpg"
            rating={4}
          />
          {/* Product */}
        </div>{" "}
        <div className="home__row">
          {/* Product */}
          <Product
            id={23674566}
            title="Home Fitness/Gym Equipment"
            price={2199.0}
            image="https://d12prgon3aw7l1.cloudfront.net/9639693_screenshot-20200616-095815-1592291231670_670x664.jpg"
            rating={4}
          />
          <Product
            id={2367456}
            title="The Lean Startup"
            price={87.99}
            image="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Lean_Startup.png/220px-Lean_Startup.png"
            rating={3}
          />
          <Product
            id={23674456}
            title="New Apple MacBook Pro - Space Gray"
            price={2099.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id={23674568}
            title="Asus ROG Strix Scar III"
            price={1999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81AS1wzLGXL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
