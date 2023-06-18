function AboutUs() {
  return (
    <>
      <title>About US</title>

      {/* Navigation */}
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 col-sm-12 mb-5">
          <div className="navigation">
            <div className="">
              <nav className="navbar d-flex">
                <div className="container-fluid font-family: 'Vast Shadow', cursive;">
                  <a className="navbar-brand fs-1 fw-bold" href="#">
                    {/* <img src="./logo.svg.jpg" alt="Logo" width="150" height="70" className="d-inline-block align-text-center ms-2" /> */}
                  </a>
                </div>
              </nav>

              <ul className="nav-list d-flex"></ul>

              {/* <div className="hamburger">
              <i className="bx bx-menu-alt-left" />
            </div> */}
            </div>
          </div>
        </div>
        <div
          className="top-containerb mb-5 d-flex flex-column my-3"
          style={{ fontSize: "" }}
        >
          <h1>About Us</h1>

          <h2>Homes begin with us</h2>
        </div>

        <div className="d-flex justify-content-center col-md-12 col-sm-12">
          <img
            src="https://content.jdmagicbox.com/comp/karad/z5/9999p2162.2162.130927154336.s9z5/catalogue/saj-the-furniture-world-nandalapur-karad-furniture-dealers-x64qecmm17.jpg"
            alt=""
          />
        </div>

        {/* about us */}
        <div className="row d-flex justify-content-center ">
          <div className="col-md-7 col-sm-12">
            <h1 className="d-flex justify-content-center my-5 mx-5">
              A leading home retailer in India with over 75+ stores, Home Centre
              is one of the country’s most preferred home shopping destinations.
            </h1>
          </div>
          <div
            className="col-md-7 col-sm-12"
            style={{
              fontFamily:
                "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            }}
          >
            <h5 className="fw-light">
              Since 1995, Home Centre has brought the joy of homemaking to
              millions of customers. Starting off with a single store in
              Sharjah, UAE, today the brand has over 100 stores worldwide. Over
              the years, Home Centre has earned a reputation for delivering
              outstanding value, continuous innovation and exceptional customer
              experience.
              <br />
              <br />
              Home Centre offers an extensive and impressive range of furniture,
              modular furniture, home furnishings, home accessories, bed and
              bath products and kitchenware. Home Centre’s in-house team of
              stylists and buyers draw inspiration from global trends to bring
              stylish and affordable furniture and homeware to a wide spectrum
              of homes ranging from the traditional to the modern. <br />
              <br />
              Home Centre India has been awarded as the most admired retailer in
              the home and office improvement category for 3 consecutive years
              from 2014 to 2016.
            </h5>
          </div>

          <div className="d-flex col-md-9 col-sm-12 justify-content-evenly my-4  ">
            <div className="card bg-dark" style={{ width: "18rem" }}>
              <img
                src="./Saurabh Ladi.jpg"
                className="img-fluid rounded-circle border p-2 "
                style={{ width: 350, height: 200 }}
                alt="..."
              />
              <div className="card-body">
                <h5
                  className="card-title text-white text-center"
                  style={{ fontFamily: "cursive" }}
                >
                  Saurabh Ladi
                </h5>
                <h5 className="card-text text-white text-center ">
                  CDAC Mumbai
                </h5>
              </div>
            </div>
            <div className="card bg-dark" style={{ width: "19rem" }}>
              <img
                src="./Umesh Tambat.jpg"
                className="img-fluid rounded-circle border  p-2"
                style={{ width: 350, height: 200 }}
                alt="..."
              />
              <div className="card-body ">
                <h5
                  className="card-title text-white text-center"
                  style={{ fontFamily: "cursive" }}
                >
                  Umesh Tambat
                </h5>
                <h5 className="card-text text-white text-center ">
                  CDAC Mumbai
                </h5>
              </div>
            </div>
            <div className="card bg-dark" style={{ width: "18rem" }}>
              <img
                src="./Mouktik saha.jpg"
                className="img-fluid rounded-circle border  p-2"
                style={{ width: 350, height: 200 }}
                alt="..."
              />
              <div className="card-body">
                <h5
                  className="card-title text-white text-center"
                  style={{ fontFamily: "cursive" }}
                >
                  Moucktic Saha
                </h5>
                <h5 className="card-text text-white text-center ">
                  CDAC Mumbai
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
