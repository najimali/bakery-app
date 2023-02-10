import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { APP_NAME } from "../../assets/constants";
import logo from "../../assets/images/logo.png";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>{APP_NAME}</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Monday - Thursday</span>
                <p>11:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Sunday</span>
                <p>11:00am - 12:00am</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Jaipur, Rajasthan, India</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Call on: 9988998800</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: najim.ali32@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe to our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2023, website made by Mohd Najim for Gan Studio. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow us: </p>

              <span>
                <a href="https://twitter.com/GanAIOfficial">
                  <i className="ri-twitter-fill"></i>
                </a>
              </span>

              <span>
                <a href="https://www.linkedin.com/company/gan-ai/">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </span>
              
              <span>
                <a href="https://www.instagram.com/gan.aiofficial/">
                  <i className="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;