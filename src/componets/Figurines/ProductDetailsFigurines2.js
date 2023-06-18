function ProductDetailsFigurines2() {
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
                <img src="./images/fig2.png" id="zoom" alt />
              </div>
            </div>
            <div className="right">
              <span>Home/Figurines</span>
              <h1>Corsica Polyresin Peacock With Metal Ring Figurine</h1>
              <div className="price">₹2,999</div>
              <form className="form">
                <input type="text" placeholder={1} />
                <a href="cart.html" className="addCart">
                  Add To Cart
                </a>
              </form>
              <h3>Product Detail</h3>
              <p>
                Add a hint of finesse to your living room decor with this classy
                sculpture figurine that has been crafted from fine quality
                material into a contemporary design with a sturdy base that
                brings about a stylish yet convenient vibe to your room. Product
                : 1 Figurine Dimensions : Figurine : 22x42cm Material :
                Polyresin Set Size : Single Pc Design : Textured Care
                Instructions : Clean with a soft dry cloth Collection : Corsica
                Net Quantity : 1 Number For Consumer Complaints Contact : Name:
                Syed Ismail, Email: help@homecentre.in, Lifestyle International
                Pvt Ltd, 1800-212-7500 Country of Origin : China Imported and
                Marketed by : Lifestyle Int Pvt Ltd.77 Degree Town
                Centre.Building No.3. West Wing.Off HAL Airport Road.
                Yamlur.Bangalore-560037 Color : Gold
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
            <div className="product-item">
              <div className="overlay">
                <a href className="product-thumb">
                  <img src="./images/fig5.png" alt />
                </a>
                <span className="discount">40%</span>
              </div>
              <div className="product-info">
                <a href="productDetailsFigurine5.html">
                  Brighton Ceramic Fox Figurine
                </a>
                <h4>₹999</h4>
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
                  <img src="./images/fig6.png" alt />
                </a>
              </div>
              <div className="product-info">
                <a href="productDetailsFigurine6.html">
                  Noor Polyresin Buddha Figurine
                </a>
                <h4>₹1,199</h4>
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

export default ProductDetailsFigurines2;
