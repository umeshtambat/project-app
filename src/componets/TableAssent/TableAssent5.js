function tableAssent5(){
return(
<>
<div>
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Box icons */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
  {/* Custom StyleSheet */}
  <link rel="stylesheet" href="CSS\styles.css" />
  {/* Bootstrap */}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
  <title>Golden Tray</title>
  {/* Product Details */}
  <section className="section product-detail">
    <div className="details container">
      <div className="left image-container">
        <div className="main">
          <img src="Table_Accent\GoldTray02.jpg" id="zoom" alt />
        </div>
      </div>
      <div className="right">
        <span>Table Accents</span>
        <h1>Golden Tray</h1>
        <div className="price">₹4000</div>
        <form className="form">
          <input type="text" placeholder={1} />
          <a href="cart.html" className="addCart">Add To Cart</a>
        </form>
        <h3>Product Detail</h3>
        <p>
          You can use them anywhere in a room to create a charming spot or use them as a centerpiece. Sleek, modern finish and sturdy material is the highlight of this platter, Place it in the living room or the dining room to enhance the decor table.
          Product : 1 Decorative Platter
          Dimensions : 39.5x17x4cm
          Shape: Rectangular
          Material : Iron
          Design : Textured
          Care Instructions : Clean with soft clean cloth
          Collection : Fiesta
          Net Quantity : 1 N
          For Consumer Complaints Contact : Name: Syed Ismail, Email: help@homecentre.in, Lifestyle International Pvt Ltd, 1800-212-7500
          Country of Origin : India
          Manufacture and Marketed by : Lifestyle Int Pvt Ltd.77 Degree Town Centre.Building No.3. West Wing.Off HAL Airport Road. Yamlur.Bangalore-560037
          Color : Gold
        </p>
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
          <a href className="product-thumb">
            <img src="Table_Accent\Fiesta_Metal_Wired_Ball.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <a href="FiestaBall.html">Fiesta Gold metal wired ball</a>
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
            <img src="Table_Accent\Moksha_Glass_vessel.jpg" alt />
          </a>
        </div>
        <div className="product-info">
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
            <img src="Table_Accent\Dastkari_Glass_Decorative_Bowl.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <a href="Datakshri.html">Dastakshari Glass Decorative Bowl</a>
          <h4>₹5400</h4>
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
          {/* <span class="discount">40%</span> */}
        </div>
        <div className="product-info">
          <a href="SilverLeaf.html">Corsica Zarin metal silver leaf Platter</a>
          <h4>₹10000</h4>
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

</div>
</>

)

}

export default tableAssent5;