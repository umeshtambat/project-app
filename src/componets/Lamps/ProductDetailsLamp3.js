function ProductDetailsLamp3() {
return (
    <>
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Box icons */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
  {/* Custom StyleSheet */}
  <link rel="stylesheet" href="./css/styles.css" />
  {/* Bootstrap */}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
  <title>details</title>
  {/* Product Details */}
 <div>
  <section className="section product-detail">
    <div className="details container">
      <div className="left image-container">
        <div className="main">
          <img src="./lamps/lamp3.jpg" id="zoom" alt />
        </div>
      </div>
      <div className="right">
        <span>Home/Lamps </span>
        <h1>Fiesta Terrazzo Table Lamp</h1>
        <div className="price">₹1,299</div>
        <form className="form">
          <input type="text" placeholder={1} />
          <a href="cart.html" className="addCart">Add To Cart</a>
        </form>
        <h3>Product Detail</h3>
        <p1>
          Overview
          Interpret a sense of elegance with this contemporary wooden and fabric table lamp, designed to set the mood of your home. The shade allows the light to radiate upward as well as downward making the surrounding luminous. Sturdy and Durable. Ideal For living and bedroom.
          Product : 1 Table Lamp
          Dimensions : Table Lamp : 21 cm x 12 cm x 26.5 cm
          Type : Table Lamp
          Power Type : Electrical
          Material : Metal
          Set Size : Single Pc
          Design : Contemporary
          Additional Feature : Base: Terrazzo Shade: 30% linen+70% polyester
          Collection : Fiesta
          Net Quantity : 1 N
          For Consumer Complaints Contact : Name: Syed Ismail, Email: help@homecentre.in, Lifestyle InternationaPvt Ltd, 1800-212-7500
          Country of Origin : China
          Imported and Marketed by : Lifestyle Int Pvt Ltd.77 Degree Town Centre.Building No.3. West Wing.Off HAL Airport Road. Yamlur.Bangalore-560037
          Color : White
        </p1>
      </div>
    </div>
  </section>
  {/* Related */}
  <section className="section featured">
    <div className="top container">
      <h1>Related Products</h1>
      <a href="#" className="view-more">View more</a>
    </div>
    <div className="product-center container">
      <div className="product-item">
        <div className="overlay">
          <a href="productdetailslamp4.html" className="product-thumb">
            <img src="./lamps/lamp4.jpg" alt />
          </a>
          <span className="discount">50%</span>
        </div>
        <div className="product-info">
          {/* <span>MEN'S CLOTHES</span> */}
          <a href="productdetailslamp4.html">Fiesta Metal Touch Table Lamp</a>
          <h4>₹1,299</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href="productdetailslamp5.html" className="product-thumb">
            <img src="./lamps/lamp5.jpg" alt />
          </a>
          <span className="discount">10%</span>
        </div>
        <div className="product-info">
          {/* <span>MEN'S CLOTHES</span> */}
          <a href="productdetailslamp5.html">Tranquil Ceramic Table Lamp</a>
          <h4>₹2,999</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href="productdetailslamp6.html" className="product-thumb">
            <img src="./lamps/lamp6.jpg" alt />
          </a>
          <span className="discount">30%</span>
        </div>
        <div className="product-info">
          {/* <span>MEN'S CLOTHES</span> */}
          <a href="productdetailslamp6.html">Tranquil Ceramic Table Lamp</a>
          <h4>₹2,999</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href="productdetailslamp7.html" className="product-thumb">
            <img src="./lamps/lamp7.jpg" alt />
          </a>
          <span className="discount">30%</span>
        </div>
        <div className="product-info">
          {/* <span>MEN'S CLOTHES</span> */}
          <a href="productdetailslamp7.html">Tranquil Ceramic Table Lamp</a>
          <h4>₹2,999</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
    </div>
  </section>
</div>

  {/* Custom Script */}
</div>

    </>
);
};

export default ProductDetailsLamp3;
