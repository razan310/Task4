import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Gallery.css';
import Title from './../Counter/Title/Title';

const Gallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const visibleImages = [
    images[(activeIndex - 2 + images.length) % images.length],
    images[(activeIndex - 1 + images.length) % images.length],
    images[activeIndex],
    images[(activeIndex + 1) % images.length],
    images[(activeIndex + 2) % images.length],
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Title title={'Gallery'} desc={'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'} />
      <div className='d-flex justify-content-center align-items-center py-1 p-4'>
        <Container className="gallery-container">
          <Row className="gallery-row flex-nowrap w-100">
            {visibleImages.map((img, index) => (
              <Col
                key={index}
                xs={12}  // عمود واحد على الشاشات الصغيرة
                md={6}   // عمودين على الشاشات المتوسطة
                lg={2}   // خمسة أعمدة على الشاشات الكبيرة
                className={`gallery-item ${index === 2 ? 'center' : ''}`}
              >
                <Image
                  src={img}
                  fluid
                  className={`gallery-image ${index === 2 ? 'highlight' : ''}`}
                />
              </Col>
            ))}
          </Row>

          {/* النقاط الموجودة أسفل الصور */}
          <div className="gallery-indicators text-center mt-3">
            {images.map((_, index) => (
              <span
                key={index}
                className={`indicator-dot m-1 ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Gallery;
