import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Login from "./Login";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
//Lamps
import Lamps from "./Lamps/Lamps";
import ProductDetailsLamp1 from "./Lamps/ProductDetailsLamp1";
import ProductDetailsLamp3 from "./Lamps/ProductDetailsLamp3";
import ProductDetailsLamp5 from "./Lamps/ProductDetailsLamp5";
import ProductDetailsLamp7 from "./Lamps/ProductDetailsLamp7";
//Vases
import Vases from "./Vases/Vases";
import ProductDetailsVase1 from "./Vases/ProductDetailsVase1";
import ProductDetailsVase2 from "./Vases/ProductDetailsVase2";
import ProductDetailsVase3 from "./Vases/ProductDetailsVase3";
import ProductDetailsVase4 from "./Vases/ProductDetailsVase4";
import ProductDetailsVase5 from "./Vases/ProductDetailsVase5";
import ProductDetailsVase6 from "./Vases/ProductDetailsVase6";
import ProductDetailsVase7 from "./Vases/ProductDetailsVase7";
import ProductDetailsVase8 from "./Vases/ProductDetailsVase8";
//TableAccent
import TableAssent from "./TableAssent/TableAssent";
import TableAssent1 from "./TableAssent/TableAssent1";
import TableAssent3 from "./TableAssent/TableAssent3";
import TableAssent5 from "./TableAssent/TableAssent5";
import TableAssent7 from "./TableAssent/TableAssent7";
// CandleHolder
import CandleHolder from "./CandleHolder/CandleHolder";
import CandleHolder1 from "./CandleHolder/CandleHolder1";
import CandleHolder3 from "./CandleHolder/CandleHolder3";
import CandleHolder5 from "./CandleHolder/CandleHolder5";
import CandleHolder7 from "./CandleHolder/CandleHolder7";
//PhotoFrames
import PhotoFrames from "./PhotoFrame/PhotoFrames";
import ProductDetailsFrame1 from "./PhotoFrame/ProductDetailsFrame1";
import ProductDetailsFrame3 from "./PhotoFrame/ProductDetailsFrame3";
import ProductDetailsFrame5 from "./PhotoFrame/ProductDetailsFrame5";
import ProductDetailsFrame7 from "./PhotoFrame/ProductDetailsFrame7";

//Figurines
import Figurines from "./Figurines/Figurines";
import ProductDetailsFigurine1 from "./Figurines/ProductDetailsFigurine1";
import ProductDetailsFigurines2 from "./Figurines/ProductDetailsFigurines2";
import ProductDetailsFigurines3 from "./Figurines/ProductDetailsFigurines3";
import ProductDetailsFigurines4 from "./Figurines/ProductDetailsFigurines4";
import ProductDetailsFigurines5 from "./Figurines/ProductDetailsFigurines5";
import ProductDetailsFigurines6 from "./Figurines/ProductDetailsFigurines6";
import ProductDetailsFigurines7 from "./Figurines/ProductDetailsFigurines7";
import ProductDetailsFigurines8 from "./Figurines/ProductDetailsFigurines8";
// import  Link  from "react-router-dom";

function Header() {
  return (
    <BrowserRouter>
      <div className="navigation">
        <div className="nav-center container d-flex shadow sm bg-body-tertiary rounded">
          <nav className="navbar d-flex">
            <div className="container-fluid font-family: 'Vast Shadow', cursive;">
              <Link className="navbar-brand fs-1 fw-bold" to={"/Home"}>
                <img
                  src="images/Sajlogo.jpg"
                  alt="Logo"
                  width={140}
                  height={60}
                  className="d-inline-block align-text-center ms-2"
                />
              </Link>
            </div>
          </nav>
          <ul className="nav-list d-flex">
            <li className="nav-item">
              <Link to={"/Home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Lamps"} className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/AboutUs"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/ContactUs"} className="nav-link">
                Contact
              </Link>
            </li>
            <li className="icons d-flex">
              <Link to={"/Login"} className="icon">
                <i className="bx bx-user" />
              </Link>
              {/* <div className="icon">
                <i className="bx bx-search" />
              </div> */}
              <div className="icon">
                <i className="bx bx-heart" />
                <span className="d-flex">0</span>
              </div>
              <Link to={"/Home"} className="icon">
                <i className="bx bx-cart" />
                <span className="d-flex">0</span>
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            <i className="bx bx-menu-alt-left" />
          </div>
        </div>
      </div>
      <Routes>
      <Route path="/" element={<Login/>} />

        <Route path="/Home" element={<Home></Home>} />
        <Route path="/AboutUs" element={<ProtectedRoute><AboutUs/></ProtectedRoute>} />
        <Route path="/ContactUs" element={<ContactUs></ContactUs>} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/SignUp" element={<SignUp></SignUp>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />

        {/* PhotoFrame */}
        <Route path="/PhotoFrames" element={<PhotoFrames></PhotoFrames>} />
        <Route
          path="/ProductDetailsFrame1"
          element={<ProductDetailsFrame1></ProductDetailsFrame1>}
        />
        <Route
          path="/ProductDetailsFrame3"
          element={<ProductDetailsFrame3></ProductDetailsFrame3>}
        />
        <Route
          path="/ProductDetailsFrame5"
          element={<ProductDetailsFrame5></ProductDetailsFrame5>}
        />
        <Route
          path="/ProductDetailsFrame7"
          element={<ProductDetailsFrame7></ProductDetailsFrame7>}
        />

        {/* CandleHolder */}
        <Route path="/CandleHolder" element={<CandleHolder></CandleHolder>} />
        <Route
          path="/CandleHolder1"
          element={<CandleHolder1></CandleHolder1>}
        />
        <Route
          path="/CandleHolder3"
          element={<CandleHolder3></CandleHolder3>}
        />
        <Route
          path="/CandleHolder5"
          element={<CandleHolder5></CandleHolder5>}
        />
        <Route
          path="/CandleHolder7"
          element={<CandleHolder7></CandleHolder7>}
        />
        {/* TableAccent */}
        <Route path="/TableAssent" element={<TableAssent></TableAssent>} />
        <Route path="/TableAssent1" element={<TableAssent1></TableAssent1>} />
        <Route path="/TableAssent3" element={<TableAssent3></TableAssent3>} />
        <Route path="/TableAssent5" element={<TableAssent5></TableAssent5>} />
        <Route path="/TableAssent7" element={<TableAssent7></TableAssent7>} />
        {/* Lamps */}
        <Route path="/Lamps" element={<Lamps></Lamps>} />
        <Route
          path="/ProductDetailsLamp1"
          element={<ProductDetailsLamp1></ProductDetailsLamp1>}
        />
        <Route
          path="/ProductDetailsLamp3"
          element={<ProductDetailsLamp3></ProductDetailsLamp3>}
        />
        <Route
          path="/ProductDetailsLamp5"
          element={<ProductDetailsLamp5></ProductDetailsLamp5>}
        />
        <Route
          path="/ProductDetailsLamp7"
          element={<ProductDetailsLamp7></ProductDetailsLamp7>}
        />
        {/* Vases */}
        <Route path="/Vases" element={<Vases></Vases>} />
        <Route
          path="/ProductDetailsVase1"
          element={<ProductDetailsVase1></ProductDetailsVase1>}
        />
        <Route
          path="/ProductDetailsVase2"
          element={<ProductDetailsVase2></ProductDetailsVase2>}
        />
        <Route
          path="/ProductDetailsVase3"
          element={<ProductDetailsVase3></ProductDetailsVase3>}
        />
        <Route
          path="/ProductDetailsVase4"
          element={<ProductDetailsVase4></ProductDetailsVase4>}
        />
        <Route
          path="/ProductDetailsVase5"
          element={<ProductDetailsVase5></ProductDetailsVase5>}
        />
        <Route
          path="/ProductDetailsVase6"
          element={<ProductDetailsVase6></ProductDetailsVase6>}
        />
        <Route
          path="/ProductDetailsVase7"
          element={<ProductDetailsVase7></ProductDetailsVase7>}
        />
        <Route
          path="/ProductDetailsVase8"
          element={<ProductDetailsVase8></ProductDetailsVase8>}
        />

        {/* Figurine */}
        <Route path="/Figurines" element={<Figurines></Figurines>} />
        <Route
          path="/ProductDetailsFigurine1"
          element={<ProductDetailsFigurine1></ProductDetailsFigurine1>}
        />
        <Route
          path="/ProductDetailsFigurines2"
          element={<ProductDetailsFigurines2></ProductDetailsFigurines2>}
        />
        <Route
          path="/ProductDetailsFigurines3"
          element={<ProductDetailsFigurines3></ProductDetailsFigurines3>}
        />

        <Route
          path="/ProductDetailsFigurines4"
          element={<ProductDetailsFigurines4></ProductDetailsFigurines4>}
        />
        <Route
          path="/ProductDetailsFigurines5"
          element={<ProductDetailsFigurines5></ProductDetailsFigurines5>}
        />
        <Route
          path="/ProductDetailsFigurines6"
          element={<ProductDetailsFigurines6></ProductDetailsFigurines6>}
        />
        <Route
          path="/ProductDetailsFigurines7"
          element={<ProductDetailsFigurines7></ProductDetailsFigurines7>}
        />
        <Route
          path="/ProductDetailsFigurines8"
          element={<ProductDetailsFigurines8></ProductDetailsFigurines8>}
        />
        
      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

export default Header;
