import Title from "../Counter/Title/Title";
import "./Departments.css";
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const Departments = ({departments}) => {
  const [activeIndex, setActiveIndex] = useState(0); 
  return (
    <>
    <div className="p-4 maxHeight" >
        <Title title="Departments" desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"/>
        <Row className=" d-flex justify-content-center align-items-center">
            {/* List of departments */}
            <Col md={3} lg={3} className="p-2">
            <div className="departments p-3 ">
                {departments.map((department, index) => (
                <div
                    key={index}
                    className={`p-2 fw-bold color-t h-100 ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                >
                    {department.name}
                </div>
                ))}
            </div>
            </Col>

            {/* Descriptions and image */}
            <Col md={6} lg={6} className="p-4 order-2 order-md-1">
                <div className="d-flex descraptions">
                <div >
                    <h1 className="color-h pb-4">{departments[activeIndex].name}</h1>
                    <p className="color-h fst-italic lh-base">{departments[activeIndex].description1}</p>
                    <br/>
                    <p className="color-h fst-italic lh-base">{departments[activeIndex].description2}</p>
                </div>
                </div>
            </Col>
            
            {/* العمود الخاص بالصورة */}
            <Col md={3} lg={3} className="p-4 order-1 order-md-2">
                <img
                src={departments[activeIndex].image}
                alt={departments[activeIndex].name}
                className="img-size px-2"
                />
            </Col>
        </Row>
      </div>
    </>
  );
};

export default Departments;
