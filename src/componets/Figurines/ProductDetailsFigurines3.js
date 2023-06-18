function ProductDetailsFigurines3() {
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
                <img src="./images/fig3.png" id="zoom" alt />
              </div>
            </div>
            <div className="right">
              <span>Home/Figurines</span>
              <h1>Eternity Polyresin Figurine, Color Brown</h1>
              <div className="price">₹1,049</div>
              <form className="form">
                <input type="text" placeholder={1} />
                <a href="cart.html" className="addCart">
                  Add To Cart
                </a>
              </form>
              <h3>Product Detail</h3>
              <p>
                Get an aesthetic upgrade to your home with the most serene Man
                with a triangle on the top figurine. It is made with a textured
                surface and a sturdy material like polyresin. This enchanting
                figurine adds a dash of class to your home and is a perfect
                gifting solution. Product : 1 Figurine Dimensions : Figurine:
                12.2x3x23.5cm Material : Polyresin Set Size : Single Pc Design :
                Textured Care Instructions : Wipe with a damp cloth. Collection
                : Eternity Ideal For : Living Room Net Quantity : 1 N For
                Consumer Complaints Contact : Name: Syed Ismail, Email:
                help@homecentre.in, Lifestyle International Pvt Ltd,
                1800-212-7500 Country of Origin : China Imported and Marketed by
                : Lifestyle Int Pvt Ltd.77 Degree Town Centre.Building No.3.
                West Wing.Off HAL Airport Road. Yamlur.Bangalore-560037 Color :
                Brown
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
            <div className="product-item">
              <div className="overlay">
                <a href className="product-thumb">
                  <img src="./images/fig7.png" alt />
                </a>
                <span className="discount">40%</span>
              </div>
              <div className="product-info">
                <a href="productDetailsFigurine7.html">
                  VEDAS Metal Leen Flower
                </a>
                <h4>₹2,199</h4>
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
export default ProductDetailsFigurines3;
