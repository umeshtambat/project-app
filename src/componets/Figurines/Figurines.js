import { Link, Route, Router, Routes } from "react-router-dom";
function Figurines ()
{
    return (
        <>  
        <div>
 
  <title>category</title>
  {/* All Products */}
  <section className="section all-products" id="products ">
    <div className="top container">
      <h1>Figurines</h1>
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
        
          <a href="productDetailsFigurine1.html" className="product-thumb">
            <img src="./images/fig1.png" alt />
          </a>
          <span className="discount">40%</span>
        </div>
        <div className="product-info">
        <Link to={"/ProductDetailsFigurine1"}>Eternity Vogue Aluminium Human Figurine</Link>
         
          <h4>₹3,499</h4>
        </div>
        <ul className="icons">
          <li><i className="bx bx-heart" /></li>
          <li><i className="bx bx-search" /></li>
          <li><i className="bx bx-cart" /></li>
        </ul>
      </div>
      <div className="product-item">
        <div className="overlay">
          
          <a href="productDetailsFigurine2.html" className="product-thumb">
            <img src="./images/fig2.png" alt />
          </a>
          <span className="discount">40%</span>
        </div>
        <div className="product-info">
        <Link to={"/ProductDetailsFigurines2"}>Corsica Polyresin Peacock With Metal Ring Figurine</Link>
          
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
          <a href className="product-thumb">
            <img src="./images/fig3.png" alt />
          </a>
          <span className="discount">40%</span>
        </div>
        <div className="product-info">
        <Link to={"/ProductDetailsFigurines3"}>Eternity Polyresin Figurine, Color Brown</Link>
          
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
            <img src="./images/fig4.png" alt />
          </a>
        </div>
        <div className="product-info">
        <Link to={"/ProductDetailsFigurines4"}>Marshmallow Cement Owl Figurine, Color Grey</Link>
         
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
          <a href className="product-thumb">
            <img src="./images/fig5.png" alt />
          </a>
          <span className="discount">40%</span>
        </div>
        <div className="product-info">
        <Link to={"/ProductDetailsFigurines5"}>Brighton Ceramic Fox Figurine</Link>
          
          <h4>₹999</h4>
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
            <img src="./images/fig6.png" alt />
          </a>
        </div>
        <div className="product-info">
        <Link to={"/ProductDetailsFigurines6"}>Noor Polyresin Buddha Figurine</Link>
          
          <h4>₹1,199</h4>
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
            <img src="./images/fig7.png" alt />
          </a>
          <span className="discount">40%</span>
        </div>
        <div className="product-info">
        <Link to={"/ProductDetailsFigurines7"}>VEDAS Metal Leen Flower</Link>
         
          <h4>₹2,199</h4>
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
            <img src="./images/fig8.png" alt />
          </a>
        </div>
        <div className="product-info">
        <Link to={"/ProductDetailsFigurines8"}>Musical Turban Metal</Link>
          
          <h4>₹799</h4>
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
export default Figurines;