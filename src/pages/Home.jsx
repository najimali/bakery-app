import React, {useState, useEffect } from 'react'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

import "../styles/hero-section.css"
import "../styles/home.css"
import whyChooseImage from "../assets/images/hero.png"
import heroImage from "../assets/images/location.png";

import serviceImageOne from "../assets/images/service-01.png";
import serviceImageTwo from "../assets/images/service-02.png";
import serviceImageThree from "../assets/images/service-03.png";

import products from "../assets/mock-data/products.js";

import Helment from "../components/Helmet/Helmet"
import ProductCard from '../components/UI/product-card/ProductCard'
import { APP_NAME, CAKE, DELICIOUS_CAKE } from '../assets/constants'
import { Link } from 'react-router-dom'

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: serviceImageOne,
    desc: "Easy ordering and delivery straight to your door",
  },

  {
    title: "Super Dine In",
    imgUrl: serviceImageTwo,
    desc: "A commitment to quality, with the finest ingredients used in every recipe.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: serviceImageThree,
    desc: "A user-friendly interface that makes browsing and ordering a breeze",
  },
];

const Home = () => {
  
  const [deliciousCake, setDeliciousCake] = useState([]);
  useEffect(() => {
    const filteredCakes = products.filter((item) => item.category === CAKE);
    const sliceCakes = filteredCakes.slice(0, 4);
    setDeliciousCake(sliceCakes);
  }, []);

  return (
    <Helment title = "Home">
      {/* ================HERO SECTION ================*/}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__img">
                {/* w-100 will make the image fit into the div  */}
                <img src={heroImage} alt="hero_image" className="w-100"/>
              </div>
            </Col>
            <Col lg= "6" md ="6">
              <div className="hero__content">
                <h1 className='mb-4 hero__title'>
                  <span> Making sweet things happen.</span>
                </h1>
                <p> 
                Sweeten your special moments with our delectable pastries and cakes.
                Your one-stop-shop for all your pastry and cake needs
                </p>
              </div>

              <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                  <Link to="/cakes">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </Link>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/cakes">See all foods</Link>
                  </button>
                </div>

              <div className="hero_service d-flex align-items-center gap-5 mt-5">
                <p className="d-flex align-items-center gap-2">
                  <span className='shipping__icon'>
                    <i className="ri-car-line"></i>
                  </span>
                  No Shipping Charges
                </p>

                <p className="d-flex align-items-center gap-2">
                  <span className="shipping__icon">
                    <i className="ri-shield-check-line"></i>
                  </span>
                  100% Secure Checkout
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    {/*================ Delicous Cake ================ */}
    <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>{DELICIOUS_CAKE}</h2>
            </Col>

            {deliciousCake.map((item) => (
              <Col lg="4" md="4" sm="6" xs="12" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    {/*================ Feature Section ================  */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h5 className='feature__subtitle mb-4'> What we serve</h5>
              <h2 className='feature__title'>Want it ?</h2>
              <h2 className='feature__title'>
                we will <span> take care</span>
              </h2>
              <p className='mb-1 mt-4 feature__text'>
              At our bakery, enjoy a wide selection of freshly baked pastries, cakes, and sweet treats.
              </p>
              <p className='feature__text'>
              Satisfy your sweet tooth with every bite!
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg ="4" md ="6" sm="6" key={index} className='mt-5'>
                <div className="feature__item text-center px-5 py-3">
                  <img src={item.imgUrl} alt="feature_item_image" className='w-25 mb-3'/>
                  <h5 className='fw-bold mb-3'>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/*================ Why choose us================ */}
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyChooseImage} alt="why-the-cake-house" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__the-cake-house">
                <h2 className="the__cake__house-title mb-4">
                  Why <span>{APP_NAME}?</span>
                </h2>
                <p className="the__cake__house-desc">
                Choose our bakery for freshly baked, mouth-watering pastries and cakes made with love. 
                With customizable options, easy ordering and delivery, and secure payment options, we provide a seamless experience for all your dessert needs.
                Trust in our commitment to quality and expertise in baking, making every bite a taste of heaven. 
                Satisfy your sweet tooth with the finest ingredients and expertly crafted recipes
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                    We serves fresh, tasty pastries and cakes made with love and the finest ingredients. Enjoy expert recipes and customizable options with easy ordering
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                    Choose our bakery for top-notch quality and support. We ensure satisfaction with every order and are committed to providing the best customer service.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                    Order from any location with ease and convenience. Our bakery offers flexible ordering options and fast delivery, ensuring that your sweet treats are never out of reach.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helment>
  )
}

export default Home