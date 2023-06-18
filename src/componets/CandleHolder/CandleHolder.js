import { Link } from "react-router-dom";

function CandleHolder () {
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
  <link rel="stylesheet" href="CSS\styles.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
  <title>Candle Holder</title>
  {/* All Products */}
  <section className="section all-products" id="products">
    <div className="top container">
      <h1>Candle Holder</h1>
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
          <a href="productDetails.html" className="product-thumb">
            <img src="Candle_Holder\Metal_See_Saw_Stand.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <Link to={"/CandleHolder1"}>See-Saw Golden</Link>
          
          <h4>₹2500</h4>
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
            <img src="Candle_Holder\Mossaic_Tapered_Hurricane_Candle_Holder.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />

          <Link to={"/MossaicTappered"}>Mossaic Tappered Hurricane </Link>
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
            <img src="Candle_Holder\Pacific_Salsa_Temple_Lantern.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <Link to={"/CandleHolder3"}>Pacific Salsa Lantern-Saw Golden</Link>
        
          <h4>₹1250</h4>
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
            <img src="Candle_Holder\Votive_Holder.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <Link to={"/CandleHolder4"}>Votive Dragon-Tail</Link>
          
          <h4>₹1500</h4>
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
            <img src="Candle_Holder\Eternity_vogue_glass_and_metal_candle_holder.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          
          <Link to={"/CandleHolder5"}>Eternity vogue glass &amp metal </Link>
          <h4>₹3500</h4>
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
            <img src="Candle_Holder\iron_round_multi_T_light_holder.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <Link to={"/CandleHolder6"}>Iron Round Multi 'T' </Link>
          <h4>₹3500</h4>
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
            <img src="Candle_Holder\Marbel_Glass_ZIG_ZAG.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <Link to={"/CandleHolder7"}>Mabel Glass ZIG-ZAG </Link>
          <h4>₹8500</h4>
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
            <img src="./Candle_Holder/Pedestal_Votive_Holder.jpg" alt />
          </a>
        </div>
        <div className="product-info">
          <span />
          <Link to={"/CandleHolder8"}>Pedestal Votive</Link>
          <h4>₹2500</h4>
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

export default CandleHolder;