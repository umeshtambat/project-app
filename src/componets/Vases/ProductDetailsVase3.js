function ProductDetailsVase3() {
  return (
    <>
      <div>
        
        
        <title>details</title>
        {/* Product Details */}
        <section className="section product-detail">
          <div className="details container">
            <div className="left image-container">
              <div className="main">
                <img src="./images/v3.png" id="zoom" alt />
              </div>
            </div>
            <div className="right">
              <span>Home/Vases</span>
              <h1>White Ceramic Vilaro Table Vases, By Purezento</h1>
              <div className="price">₹1,519</div>
              <form className="form">
                <input type="text" placeholder={1} />
                <a href="cart.html" className="addCart">
                  Add To Cart
                </a>
              </form>
              <h3>Product Detail</h3>
              <p>
                Brand Purezento Assembly No Assembly Required Colour White
                Dimensions (In Centimeters) Length:, 30.48 Width: 10.16 Height:
                30.48 Dimensions (In Inches) Length:, 12 Width: 4 Height:12
                Material Ceramic Pack Content Set of 2 Table Vases Product
                Rating 4.0 Weight 1.950 Kg Sku DE2036379-S-PM39874
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
                  <img src="./images/v4.png" alt />
                </a>
              </div>
              <div className="product-info">
                <a href="productDetailsVase4.html">
                  Enlongated Ceramic Table Vase, By Folkstorys
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
                  <img src="./images/v5.png" alt />
                </a>
                <span className="discount">40%</span>
              </div>
              <div className="product-info">
                <a href="productDetailsVase5.html">
                  Aura Animal Stripes Gold Stoneware Floor Vase
                </a>
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
                <a href="productDetailsVase6.html">
                  Twisted Ceramic Color White Table Vase
                </a>
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
                <a href="productDetailsVase7.html">
                  Ornate Blooms Pink Colour Ceramic Table Vase
                </a>
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
          </div>
        </section>
        {/* Custom Script */}
      </div>
    </>
  );
}
export default ProductDetailsVase3;
