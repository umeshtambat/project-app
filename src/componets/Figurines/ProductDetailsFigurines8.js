function ProductDetailsFigurines8() {
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Box icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
        {/* Custom StyleSheet */}
        <link rel="stylesheet" href="./css/styles.css" />
        {/* Website logo */}
        <link
          rel="shortcut icon"
          href="images/website logo.jpg"
          type="image/x-icon"
        />
        {/* Bootstrap */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <title>details</title>
        {/* Product Details */}
        <section className="section product-detail">
          <div className="details container">
            <div className="left image-container">
              <div className="main">
                <img src="./images/fig8.png" id="zoom" alt />
              </div>
            </div>
            <div className="right">
              <span>Home/Figurines</span>
              <h1>Musical Turban Metal</h1>
              <div className="price">₹799</div>
              <form className="form">
                <input type="text" placeholder={1} />
                <a href="cart.html" className="addCart">
                  Add To Cart
                </a>
              </form>
              <h3>Product Detail</h3>
              <p>
                Brand Golden Peacock Assembly No Assembly Required Colour Yellow
                Dimensions (In Centimeters) L 9.9 x B 17 x H 32.8 Dimensions (In
                Inches) L 3.9 x 6.69 x H 12.9 Hand crafted Yes Material Metal
                Pack Content 1 Figurines Showpiece Product Rating 4.0 Weight 3.3
                Kgs Sku DE1961318-S-PM22000
              </p>
            </div>
          </div>
        </section>
        {/* Related */}
        <section className="section featured">
          <div className="top container">
            <h1>Related Products</h1>
            <a href="#" className="view-more">
              View more
            </a>
          </div>
          <div className="product-center container">
            <div className="product-item">
              <div className="overlay">
                <a
                  href="productDetailsFigurine1.html"
                  className="product-thumb"
                >
                  <img src="./images/fig1.png" alt />
                </a>
                <span className="discount">40%</span>
              </div>
              <div className="product-info">
                <a href="productDetailsFigurine1.html">
                  Eternity Vogue Aluminium Human Figurine
                </a>
                <h4>₹3,499</h4>
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
                <a
                  href="productDetailsFigurine2.html"
                  className="product-thumb"
                >
                  <img src="./images/fig2.png" alt />
                </a>
                <span className="discount">40%</span>
              </div>
              <div className="product-info">
                <a href="productDetailsFigurine2.html">
                  Corsica Polyresin Peacock With Metal Ring Figurine
                </a>
                <h4>₹2,999</h4>
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
                  <img src="./images/fig3.png" alt />
                </a>
                <span className="discount">40%</span>
              </div>
              <div className="product-info">
                <a href="productDetailsFigurine3.html">
                  Eternity Polyresin Figurine, Color Brown
                </a>
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
                  <img src="./images/fig4.png" alt />
                </a>
              </div>
              <div className="product-info">
                <a href="productDetailsFigurine4.html">
                  Marshmallow Cement Owl Figurine, Color Grey
                </a>
                <h4>₹699</h4>
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
export default ProductDetailsFigurines8;
