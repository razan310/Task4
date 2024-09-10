import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './Testimonials.css';
import Title from './../Counter/Title/Title';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

const Testimonials = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  const visibleData = [
    data[(activeIndex - 1 + data.length) % data.length],
    data[activeIndex],
    data[(activeIndex + 1) % data.length],
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className='p-4'>
        <Title title="Testimonials" desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
        <div className="d-flex flex-column align-items-center py-1 pt-3">
          {/* Container for the cards */}
          <Container>
            <Row className="justify-content-center flex-nowrap">
              {visibleData.map((item, index) => (
                <Col
                  key={index}
                  xs={12}  
                  md={12}   
                  lg={4}   
                  className={`mb-4 testimonials-gallery-item ${index === 1 ? 'highlight' : ''}`}
                >
                  <Card className="border-0 shadow-sm">
                    <Card.Header className="color-bgq border-0 p-3 textPcolor">
                      <FaQuoteLeft className="testimonials-colorQ  " /> {item.text} <FaQuoteRight className="testimonials-colorQ " />
                    </Card.Header>
                    <div className="text-center mt-3">
                      <Image
                        src={item.img}
                        fluid
                        roundedCircle
                        className={index === 1 ? 'highlight-image' : 'regular-image'}
                        style={{ width: '80px', height: '80px' }}
                      />
                    </div>
                    <Card.Body className="text-center">
                      <Card.Title className='textPcolor'>{item.name}</Card.Title>
                      <Card.Text className='textPcolor fw-light fst-italic' style={{fontSize:"14px"}}>{item.title}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          {/* Dots below the images */}
          <div className="testimonials-gallery-indicators text-center mt-4 pt-4">
            {data.map((_, index) => (
              <span
                key={index}
                className={`m-1 testimonials-indicator-dot ${index === activeIndex ? 'testimonials-active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
