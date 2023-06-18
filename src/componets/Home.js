import { Link, Route, Router, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";

// import Figurines from "./Figurines";
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Saaj</title>
        {/* Header */}
        <header className="header" id="header">
          {/* Navbar */}
          <br />
          <br />
          <br />
          <br />
          {/* carousel */}

          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active " data-bs-interval={2000}>
                <img
                  src="./images/c1.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img
                  src="./images/c2.png"
                  className="d-block w-100 "
                  alt="..."
                />
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img
                  src="./images/c3.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <br />
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          
          {/* carousel */}
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active " data-bs-interval={2000}>
                <img src="./Car1.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img src="./Car2.jpg" className="d-block w-100 " alt="..." />
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img src="./Car1.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <br />
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Glides */}
          {/* <div className="hero">
            <div className="glide" id="glide_1">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  <li className="glide__slide">
                    <div className="center">
                      <div className="left">
                        <span className>New Inspiration 2023</span>
                        <h1 className>Let's Design Your </h1> <br />{" "}
                        <h1>Dream Home</h1>
                        <p>Follow Trends In Furniture</p>
                        <a href="TableAccent.html" className="hero-btn btn-1">
                          SHOP NOW
                        </a>
                      </div>
                      <div className="right">
                        <img className="img1" src="/h2.png" alt />
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="center">
                      <div className="left">
                        <span>New Inspiration 2023</span>
                        <h1>THE PERFECT MATCH!</h1>
                        <p>Decorations for your HOME</p>
                        <a href="vases.html" className="hero-btn">
                          SHOP NOW
                        </a>
                      </div>
                      <div className="right">
                        <img className="img2" src="h1.png" alt />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </header>
        {/* Categories Section */}
        <section className="section category">
          <div className="title">
            <h1>Shop By Categories</h1>
            <p>A perfect one stop solution for all your Home Makeover needs</p>
          </div>
          <div className="cat-center">
            <div className="cat">
              <img src="./images/f1.png" alt />
              <div>
                <Link to={"/Figurines"}>Figurines</Link>
              </div>
            </div>
            <div className="cat">
              <img src="./images/v.png" alt />
              <div>
                <Link to={"/Vases"}>Vases</Link>
              </div>
            </div>
            <div className="cat">
              <img src="./images/l.png" alt />
              <div>
                <Link to={"/Lamps"}>Lamps</Link>
              </div>
            </div>
          </div>
          <br />
          <div className="cat-center">
            <div className="cat">
              <img src="./images/ff.jpg" alt />
              <div>
                <Link to={"/PhotoFrames"}>Photo Frames</Link>
              </div>
            </div>
            <div className="cat">
              <img src="./images/ch.png" alt />
              <div>
                <Link to={"/CandleHolder"}>Candle Holder</Link>
              </div>
            </div>
            <div className="cat">
              <img src="./images/ta.png" alt />
              <div>
                <Link to={"/TableAssent"}>Table Accent</Link>
              </div>
            </div>
          </div>
        </section>
        {/* New Arrivals */}
        <section className="section new-arrival">
          <div className="title">
            <h1>UPCOMING PRODUCTS</h1>
            <p>Looking for the Latest Styles? See What's New </p>
          </div>
          <div className="product-center">
            <div className="product-item">
              <div className="overlay">
                <a href="productDetails.html" className="product-thumb">
                  <img src="./images/na1.png" alt />
                </a>
              </div>
              <div className="product-info">
                <span> Figurines</span>
                <a href="productDetails.html">
                  Metal Tribal Ladies In Multicolour Wall Art
                </a>
                <h4>₹799</h4>
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
                  <img src="./images/na2.png" alt />
                </a>
                <span className="discount">50%</span>
              </div>
              <div className="product-info">
                <span>Figurines</span>
                <a href>Marshmallow Cement Giraffe Figurine</a>
                <h4>₹599</h4>
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
                  <img src="./images/na3.png" alt />
                </a>
              </div>
              <div className="product-info">
                <span>Table Accents</span>
                <a href>Aluminium Chrono Royal Table Clock, Display Analog</a>
                <h4>₹1,539</h4>
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
                  <img src="./images/na4.png" alt />
                </a>
                <span className="discount">50%</span>
              </div>
              <div className="product-info">
                <span>Table Accents</span>
                <a href>Moksha Decor Ceramic Bird Decorative Canister</a>
                <h4>₹1,999</h4>
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
                  <img src="./images/na5.png" alt />
                </a>
              </div>
              <div className="product-info">
                <span>Vases</span>
                <a href>Pacific Eadric Solid Glass Bud Vase with flowers</a>
                <h4>₹799</h4>
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
                  <img src="./images/na6.png" alt />
                </a>
                <span className="discount">50%</span>
              </div>
              <div className="product-info">
                <span>Vases</span>
                <a href>Moksha Decor Glass and Metal Narrow Vase</a>
                <h4>₹4,999</h4>
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
                  <img src="./images/na7.jpg" alt />
                </a>
              </div>
              <div className="product-info">
                <span>Photo Frames</span>
                <a href>Beige Solid Wood Set Of 4 Collage Photo Frames</a>
                <h4>₹589</h4>
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
                  <img src="./images/na8.png" alt />
                </a>
              </div>
              <div className="product-info">
                <span>Candle Holder</span>
                <a href>Eternity Glass and Aluminium Hurricane Candle Holder</a>
                <h4>₹1,399</h4>
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
        {/* Promo */}
        <section className="section banner">
          <div className="left">
            <span className="trend">Trending Figurine Designs</span>
            <h1>New Collection </h1>
            <p>
              New Arrival <span className="color">Sale 50% OFF</span> Limited
              Time Offer
            </p>
            <a href="#" className="btn btn-1" style={{ fontSize: "1.6rem" }}>
              Discover Now
            </a>
          </div>
          <div className="right">
            <img src="./images/b.png" alt style={{ alignContent: "end" }} />
          </div>
        </section>
        {/* Featured */}
        <section className="section new-arrival">
          <div className="title">
            <h1>Featured</h1>
            <p>All the latest picked from designer of our store</p>
          </div>
          <div className="product-center">
            <div className="product-item">
              <div className="overlay">
                <a href className="product-thumb">
                  <img src="./images/fea1.png" alt />
                </a>
                <span className="discount">50%</span>
              </div>
              <div className="product-info">
                <span>Vases</span>
                <a href>Metal Flower Zydo Vase In Multicolour,</a>
                <h4>₹989</h4>
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
                  <img src="./images/fea2.png" alt />
                </a>
              </div>
              <div className="product-info">
                <span> Figurine</span>
                <a href>Blue Polyresin Classic Yoga Figurine (Set Of 2)</a>
                <h4>₹1,599</h4>
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
                  <img src="./images/fea3.png" alt />
                </a>
                <span className="discount">40%</span>
              </div>
              <div className="product-info">
                <span>Lamps</span>
                <a href>
                  Forever Beige Cotton Shade Night Lamp With Wood Base,
                </a>
                <h4>₹949</h4>
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
                  <img src="./images/fea4.png" alt />
                </a>
              </div>
              <div className="product-info">
                <span>Table Accent</span>
                <a href>Eternity Aluminium Car Table Accent, Color Black</a>
                <h4>₹1,119</h4>
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
        {/* PopUp */}
        <div className="popup hide-popup">
          <div className="popup-content">
            <div className="popup-close">
              <i className="bx bx-x" />
            </div>
            <div className="popup-left">
              <div className="popup-img-container">
                <img
                  className="popup-img"
                  src="./images/popup1.PNG"
                  alt="popup"
                />
              </div>
            </div>
            <div className="popup-right">
              <div className="right-content">
                <h1>
                  Get Discount <span>50%</span> Off
                </h1>
                <p>
                  Sign up to our newsletter and save 30% for you next purchase.
                  No spam, we promise!
                </p>
                <form action="#">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="popup-form"
                    onclick="validateEmail()"
                  />
                  <a href="./signup.html">Subscribe</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        {/* <Route path="/AboutUs" element={<AboutUs></AboutUs>} />
          <Route path="/ContactUs" element={<ContactUs></ContactUs>} />
          <Route path="/Lamps" element={<Lamps></Lamps>} />
          <Route path="/Login" element={<Login></Login>} />
          <Route path="/SignUp" element={<SignUp></SignUp>} /> */}
      </Routes>
    </>
  );
}

export default Home;
