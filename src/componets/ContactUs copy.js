import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";

function ContactUs() {
  return (
    <>
      <br />
      <br />

      <div className="d-flex justify-content-center  mt-5 my-5 p-5">
        <Image src="./images/SAAJLOGO2.jpg" fluid />
      </div>

      <div className="d-flex justify-content-center my-2  mb-4 ">
        <h1>Contact Us</h1>
      </div>

      <div
        className="d-flex justify-content-center mb-5"
        style={{ fontSize: "1.5rem" }}
      >
        <div className="container">
          <form action="/action_page.php">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />
            <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value="australia">India</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
              <option value="UK">UK</option>
              <option value="russia">Russia</option>
            </select>
            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: 200 }}
              defaultValue={""}
            />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
