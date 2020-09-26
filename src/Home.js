import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.tech2globe.com/blog/wp-content/uploads/2019/03/cover.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Sucessful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking. Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
            price={169.0}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT1ZZH5Cicyrsa5Ss-dS-pC85bIiuOALndWNDxHaBsLaPagA6FKpxL8NreqlWC_MEmGFpzuOEkO4EZ9tc2K7POoK-X5lgo5o_N6qb41b8DZzrvDddMihtxg9w&usqp=CAE"
            rating={5}
          />
          <Product
            id="23445930"
            title="Certified Refurbished Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
            price={89.99}
            image="https://m.media-amazon.com/images/I/61Gob-M3snL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_5X355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
