import { Link } from "react-router-dom";
function Lamps() {
    return (
        <>
        <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Website logo */}
  <link rel="shortcut icon" href="images/website logo.jpg" type="image/x-icon" />
  {/* Box icons */}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
  {/* Custom StyleSheet */}
  <link rel="stylesheet" href="./css/styles.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
  <title>category</title>
  {/* Navigation */}
  {/* All Products */}
  <section className="section all-products" id="products">
    <div className="top container">
      <h1><b>Lamps </b></h1>
      {/* <form>
        <select>
          <option value={1}>Defualt Sorting</option>
          <option value={2}>Sort By Price</option>
          <option value={3}>Sort By Popularity</option>
          <option value={4}>Sort By Sale</option>
          <option value={5}>Sort By Rating</option>
        </select>
        <span><i className="bx bx-chevron-down" /></span>
      </form> */}
    </div>
    <div className="product-center container">
      <div className="product-item">
        <div className="overlay">
          <a href="productdetailslamp1.html" className="product-thumb">
            <img src="./lamps/lamp1.jpg" alt />
          </a>
          <span className="discount">40%</span>
        </div>
        <div className="product-info">
        <Link to={"/productdetailslamp1"}>Eternity Ceramic Electric Table Lamp</Link>
          
          <h4>₹ 2,399</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          <a href="productdetailslamp2.html" className="product-thumb">
            <img src="./lamps/lamp2.jpg" alt />
          </a>
          <span className="discount">35%</span>
        </div>
        <div className="product-info">
          <a href="productdetailslamp2.html">Corsica Dragonfly Table Lamp</a>
          <h4>₹2,099</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
        
          <a href="productdetailslamp3.html" className="product-thumb">
            <img src="./lamps/lamp3.jpg" alt />
          </a>
          <span className="discount">20%</span>
        </div>
        <div className="product-info">
        <Link to={"/productdetailslamp3"}>Fiesta Terrazzo Table Lamp</Link>
         
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
        
          <Link to={"/productdetailslamp5"}>Tranquil Ceramic Table Lamp</Link>
          
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
         
          <Link to={"/productdetailslamp7"}>Tranquil Ceramic Table Lamp</Link>
         
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
          <a href="productdetailslamp8.html" className="product-thumb">
            <img src="./lamps/lamp8.jpg" alt />
          </a>
          <span className="discount">15%</span>
        </div>
        <div className="product-info">
          {/* <span>MEN'S CLOTHES</span> */}
          <a href="productdetailslamp8.html">Melody Vignette Metal Ceiling Lamp</a>
          <h4>₹1,099</h4>
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


export default Lamps;