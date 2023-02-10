import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { ALL, CAKE, COOKIE, PASTRY } from '../assets/constants'

import mockProducts from '../assets/mock-data/products'
import cookie3DImage from "../assets/images/cookie_3d.png"
import pastry3DImage from "../assets/images/pastry_3d.webp"

import ProductCard from '../components/UI/product-card/ProductCard'
import "../styles/home.css"

const Cakes = () => {
  const [category, setCategory] = useState(ALL);
  const [products, setProducts] = useState(mockProducts);

  useEffect(()=>{

    let filterProducts = mockProducts
    switch(category){
      case ALL:
        filterProducts = mockProducts
        break;
      case CAKE:
        filterProducts = mockProducts.filter(product => product.category === CAKE)
        break;
      case COOKIE:
        filterProducts = mockProducts.filter(product => product.category === COOKIE)
        break;
      case PASTRY:
        filterProducts = mockProducts.filter(product => product.category === PASTRY)
        break;
      default:
        filterProducts = mockProducts
        break;
    }
    setProducts(filterProducts)
  }, [category]);
  return (
      
      <section>
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2>Popular {category === ALL ? "Foods" : category}</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button 
                  className={`all__btn ${category === ALL ? "foodBtnActive" : ""}`}
                  onClick={() => setCategory(ALL)}
                >
                  All
                </button>
                <button 
                  className={`d-flex align-items-center gap-1 ${category === CAKE ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory(CAKE)}
                >
                  <i className="ri-cake-2-fill"></i>
                  {/* <img src={foodCategoryImg01} alt="food-category_image01" /> */}
                  {CAKE}
                </button>
                <button 
                  className={`d-flex align-items-center gap-2 ${category === COOKIE ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory(COOKIE)}
                >
                  <img src={cookie3DImage} alt="food-category_image02" />
                  {COOKIE}
                </button>
                <button 
                  className={`d-flex align-items-center gap-2 ${category === PASTRY ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory(PASTRY)}
                >
                  <img src={pastry3DImage} alt="food-category_image03" />
                  {PASTRY}
                </button>
              </div>
            </Col>

            {products.map((item, index) => (
              <Col lg="4" md="4" sm="6" xs="12" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
  )
}

export default Cakes