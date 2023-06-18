
function ProductDetailsVase1()
{
    return(
        <>  
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Box icons */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
  {/* Custom StyleSheet */}
  <link rel="stylesheet" href="./css/styles.css" />
  {/* Website logo */}
  <link rel="shortcut icon" href="images/website logo.jpg" type="image/x-icon" />
  {/* Bootstrap */}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
  <title>details</title>
  {/* Product Details */}
  <section className="section product-detail">
    <div className="details container">
      <div className="left image-container">
        <div className="main">
          <img src="./images/v1.png" id="zoom" alt />
        </div>
      </div>
      <div className="right">
        <span>Home/Vases</span>
        <h1>Designer White Flower Vase,
          By Tayhaa</h1>
        <div className="price">₹2,909</div>
        <form className="form">
          <input type="text" placeholder={1} />
          <a href="cart.html" className="addCart">Add To Cart</a>
        </form>
        <h3>Product Detail</h3>
        <p>
          Brand
          Tayhaa
          Assembly
          No Assembly Required
          Colour
          White
          Dimensions (In Centimeters)
          L 15 x B 9.9 x H 24.4
          Dimensions (In Inches)
          L 5.9 x B 3.9 x H 9.6
          Material
          Ceramic
          Pack Content
          1 Vase
          Weight
          1.6 Kgs
          Sku
          DE2045087-S-PM9076
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
            <img src="./images/v2.png" alt />
          </a>
          <span className="discount">40%</span>
        </div>
        <div className="product-info">
          <a href="productDetailsVase2.html">Thick Black Malena Glass Flower Vase,
            By Tayhaa</a>
          <h4>₹1,609
          </h4>
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
            <img src="./images/v3.png" alt />
          </a>
          <span className="discount">40%</span>
        </div>
        <div className="product-info">
          <a href="productDetailsVase3.html">White Ceramic Vilaro Table Vases,
            By Purezento</a>
          <h4>₹1,519</h4>
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
            <img src="./images/v4.png" alt />
          </a>
        </div>
        <div className="product-info">
          <a href="productDetailsVase4.html">Enlongated Ceramic Table Vase,
            By Folkstorys</a>
          <h4>₹1,049</h4>
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
            <img src="./images/v5.png" alt />
          </a>
          <span className="discount">40%</span>
        </div>
        <div className="product-info">
          <a href="productDetailsVase5.html">Aura Animal Stripes Gold Stoneware Floor Vase</a>
          <h4>₹5,999</h4>
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
export default ProductDetailsVase1;