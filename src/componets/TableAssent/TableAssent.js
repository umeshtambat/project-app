import { Link } from "react-router-dom";

function TableAssent ()
{
    return(
<>
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Website logo */}
  <link rel="shortcut icon" href="images/website logo.jpg" type="image/x-icon" />
  {/* Box icons */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
  {/* Custom StyleSheet */}
  <link rel="stylesheet" href="CSS\styles.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
  <title>Table Accents </title>
  {/* All Products */}
  <section className="section all-products" id="products">
    <div className="top container">
      <h1>Table Accents</h1>
     
    </div>
    <div className="product-center container">
      <div className="product-item">
        <div className="overlay">
          <a href="productDetails.html" className="product-thumb">
            <img src="Table_Accent\Corsica_Cronus_Metal_Globe.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <Link to={"/TableAssent1"}>Black Metalic Globe</Link>
          <h4>₹899</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href className="product-thumb">
            <img src="Table_Accent\Corsica_Polyresin_Peacock.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <a href="Peacock.html">Corsica Polyresin Peacock</a>
          <h4>₹1999</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href className="product-thumb">
            <img src="Table_Accent\Fiesta_Metal_Wired_Ball.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <Link to={"/TableAssent3"}>Fiesta Golden metal wired ball</Link>
          <h4>₹7000</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href className="product-thumb">
            <img src="Table_Accent\Ceramic_Bird_Decorative_Canister.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <Link to={"/TableAssent3"}>Ceramic Bird Decorative Canister</Link>
          <h4>₹5500</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href className="product-thumb">
            <img src="Table_Accent\Golden_Tray.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <Link to={"/TableAssent5"}>Golden Tray</Link >
          <h4>₹4000</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href className="product-thumb">
            <img src="Table_Accent\Moksha_Glass_vessel.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <a href="MokshaGoldVessel.html">Moksha Gold Glass Vessel</a>
          <h4>₹4500</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href className="product-thumb">
            <img src="Table_Accent\Corsica_Zarin_metal_Leaf_Platter.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <Link to={"/TableAssent7"}>Corsica Zarin metal silver leaf Platter</Link>
          <h4>₹10000</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href className="product-thumb">
            <img src="Table_Accent\Dastkari_Glass_Decorative_Bowl.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <a href="Datakshri.html">Dastakshari Glass Decorative Bowl</a>
          <h4>₹5400</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
    </div>
  </section>
  {/* Custom Script */}
</div>

</>

    )
}

export default TableAssent;