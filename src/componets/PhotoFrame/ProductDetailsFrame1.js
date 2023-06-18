function ProductDetailsFrame1() {
    return (
        <>
        <div>
 
  <title>details</title>
  {/* Product Details */}
  <section className="section product-detail">
    <div className="details container">
      <div className="left image-container">
        <div className="main">
          <img src="./photo frames/frame1.jpg" id="zoom" alt />
        </div>
      </div>
      <div className="right">
        <span>Home/Photo Frames </span>
        <h1>Sepia Groovy Photo Frame - Set of 7</h1>
        <div className="price">₹1,199</div>
        <form className="form">
          <input type="text" placeholder={1} />
          <a href="cart.html" className="addCart">Add To Cart</a>
        </form>
        <h3>Product Detail</h3>
        <p1>
          Overview
          Add some gracefully swanky decor to your home with this artistic picture frame.
          Product : 7 Photo Frames
          Type : Photo Frame Sets
          Material : MDF
          Set Size : Set Of 7 Pcs
          Care Instructions : MDF
          Collection : Sepia
          For Consumer Complaints Contact : Name: Syed Ismail, Email: help@homecentre.in, Lifestyle International Pvt Ltd, 1800-212-7500
          Country of Origin : China
          Imported and Marketed by : Lifestyle Int Pvt Ltd.77 Degree Town Centre.Building No.3. West Wing.Off HAL Airport Road. Yamlur.Bangalore-560037
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
          <a href="productdetailsframe2.html" className="product-thumb">
            <img src="./photo frames/frame2.jpg" alt />
          </a>
          <span className="discount">15%</span>
        </div>
        <div className="product-info">
          <a href="productdetailsframe2.html">Austin - Single Metal - Photo Frame</a>
          <h4>₹1,099</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href="productdetailsframe3.html" className="product-thumb">
            <img src="./photo frames/frame3.jpg" alt />
          </a>
          <span className="discount">10%</span>
        </div>
        <div className="product-info">
          <a href="productdetailsframe3.html">Corsica Memories Al Photo Frame</a>
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
          <a href="productdetailsframe4.html" className="product-thumb">
            <img src="./photo frames/frame4.jpg" alt />
          </a>
          <span className="discount">15%</span>
        </div>
        <div className="product-info">
          <a href="productdetailsframe4.html">Orion Detroit Brown Photo Frame</a>
          <h4>₹699</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href="productdetailsframe1.htm5" className="product-thumb">
            <img src="./photo frames/frame5.jpg" alt />
          </a>
          <span className="discount">10%</span>
        </div>
        <div className="product-info">
          <a href="productdetailsframe5.html">Eternity black Wooden Photo Frame</a>
          <h4>₹999</h4>
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

export default ProductDetailsFrame1;