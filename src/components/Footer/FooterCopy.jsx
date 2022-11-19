import React from "react";
import "./FooterCopy.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer mb-4"lg="3" md="6">
        <img src={Wave} alt="" style={{ width: "100%" }} />
        <div className="f-left">
          <span className="f-font">Eclips Education</span>
          <span>Follow us on social media</span>
          <div className="f-icons">
            <Insta color="white" size={"3rem"} />
            <Facebook color="white" size={"3rem"} />
            
          </div>
        </div>

        <div className="f-content">
        <span className="f-font">Explore</span>
        <ul className="f-list" style={{ listStyleType: "none" }}>
          <li>Home</li>
          <li>About US</li>
          <li>Blog</li>
          <li>Courses</li>
        </ul>
        </div>


      
      
      <div className="f-right">
        <div>
          <span className="f-font">Contact US</span>
          <br/>
          <br/>
          Address: 28 4th floor P&J City complex <br/>80000 <br/>Sri Lanka
          <br/>
          <br/>
          Phone: +94 77 125 2303
          <br/>
          <br/>
          Email: eclipsegalle@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;


/* <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Learners.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: 28 4th floor P&J City complex 80000 Sri Lanka</p>
            <p> Phone: +94 77 125 2303 </p>
            <p>Email: eclipsegalle@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer> */