import { Link, Route, Router, Routes } from "react-router-dom";
function Vases() {
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Website logo */}
        <link
          rel="shortcut icon"
          href="images/website logo.jpg"
          type="image/x-icon"
        />
        {/* Box icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
        {/* Custom StyleSheet */}
        <link rel="stylesheet" href="./css/styles.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <title>category</title>
        {/* All Products */}
        <section className="section all-products" id="products">
          <div className="top container">
            <h1>Vases</h1>
         
          </div>
          <div className="product-center container">
            <div className="product-item">
              <div className="overlay">
                <a href="productDetails.html" className="product-thumb">
                  <img src="./images/v1.png" alt />
                </a>
                <span className="discount">40%</span>
              </div>
              <div className="product-info">
              <Link to={"/ProductDetailsVase1"}>Designer White Flower Vase, By Tayhaa</Link>
                
                <h4>₹2,909</h4>
              </div>
              <ul className="icons">
                <li>
                  <i className="bx bx-heart" />
                </li>
                <li>
                  <i className="bx bx-search" />
                </li>
                <li>
                  <i className="bx bx-cart" />
                </li>
              </ul>
            </div>
            <div className="product-item">
              <div className="overlay">
                <a href className="product-thumb">
                  <img src="./images/v2.png" alt />
                </a>
                <span className="discount">40%</span>
              </div>
              <div className="product-info">
              <Link to={"/ProductDetailsVase2"}>Thick Black Malena Glass Flower Vase, By Tayhaa</Link>
                
                <h4>₹1,609</h4>
              </div>
              <ul className="icons">
                <li>
                  <i className="bx bx-heart" />
                </li>
                <li>
                  <i className="bx bx-search" />
                </li>
                <li>
                  <i className="bx bx-cart" />
                </li>
              </ul>
            </div>
            <div className="product-item">
              <div className="overlay">
                <a href className="product-thumb">
                  <img src="./images/v3.png" alt />
                </a>
                <span className="discount">40%</span>
              </div>
              <div className="product-info">
              <Link to={"/ProductDetailsVase3"}> White Ceramic Vilaro Table Vases, By Purezento</Link>
                
                <h4>₹1,519</h4>
              </div>
              <ul className="icons">
                <li>
                  <i className="bx bx-heart" />
                </li>
                <li>
                  <i className="bx bx-search" />
                </li>
                <li>
                  <i className="bx bx-cart" />
                </li>
              </ul>
            </div>
            <div className="product-item">
              <div className="overlay">
                <a href className="product-thumb">
                  <img src="./images/v4.png" alt />
                </a>
              </div>
              <div className="product-info">
              <Link to={"/ProductDetailsVase4"}>Enlongated Ceramic Table Vase, By Folkstorys</Link>
                
                <h4>₹1,049</h4>
              </div>
              <ul className="icons">
                <li>
                  <i className="bx bx-heart" />
                </li>
                <li>
                  <i className="bx bx-search" />
                </li>
                <li>
                  <i className="bx bx-cart" />
                </li>
              </ul>
            </div>
            <div className="product-item">
              <div className="overlay">
                <a href className="product-thumb">
                  <img src="./images/v5.png" alt />
                </a>
                <span className="discount">40%</span>
              </div>
              <div className="product-info">
              <Link to={"/ProductDetailsVase5"}>Aura Animal Stripes Gold Stoneware Floor Vase</Link>
               
                <h4>₹5,999</h4>
              </div>
              <ul className="icons">
                <li>
                  <i className="bx bx-heart" />
                </li>
                <li>
                  <i className="bx bx-search" />
                </li>
                <li>
                  <i className="bx bx-cart" />
                </li>
              </ul>
            </div>
            <div className="product-item">
              <div className="overlay">
                <a href className="product-thumb">
                  <img src="./images/v6.png" alt />
                </a>
              </div>
              <div className="product-info">
              <Link to={"/ProductDetailsVase6"}>Twisted Ceramic Color White Table Vase</Link>
                
                <h4>₹979</h4>
              </div>
              <ul className="icons">
                <li>
                  <i className="bx bx-heart" />
                </li>
                <li>
                  <i className="bx bx-search" />
                </li>
                <li>
                  <i className="bx bx-cart" />
                </li>
              </ul>
            </div>
            <div className="product-item">
              <div className="overlay">
                <a href className="product-thumb">
                  <img src="./images/v7.png" alt />
                </a>
                <span className="discount">40%</span>
              </div>
              <div className="product-info">
              <Link to={"/ProductDetailsVase7"}>Ornate Blooms Pink Colour Ceramic Table Vase</Link>
                
                <h4>₹2,159</h4>
              </div>
              <ul className="icons">
                <li>
                  <i className="bx bx-heart" />
                </li>
                <li>
                  <i className="bx bx-search" />
                </li>
                <li>
                  <i className="bx bx-cart" />
                </li>
              </ul>
            </div>
            <div className="product-item">
              <div className="overlay">
                <a href className="product-thumb">
                  <img src="./images/v8.png" alt />
                </a>
              </div>
              <div className="product-info">
              <Link to={"/ProductDetailsVase8"}> Sculpture Ivory Ceramic Table Vase, By Folkstorys</Link>
                
                <h4>₹1,259</h4>
              </div>
              <ul className="icons">
                <li>
                  <i className="bx bx-heart" />
                </li>
                <li>
                  <i className="bx bx-search" />
                </li>
                <li>
                  <i className="bx bx-cart" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Custom Script */}
      </div>
    </>
  );
}
export default Vases;
