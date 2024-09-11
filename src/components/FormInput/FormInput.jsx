import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./FormInput.css";

function FormInput() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Form className="appointmant-form p-5 justify-content-center">
      <Row className="mb-3 w-100 ">
        <Col md={4} lg={4} className='px-2'>
          <FloatingLabel controlId="floatingName" label="Your Name" className="mb-3 date-picker-wrapper">
            <Form.Control type="text" placeholder="Your Name" />
          </FloatingLabel>
        </Col>
        <Col md={4} lg={4} className='px-2'>
          <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3 date-picker-wrapper">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>
        <Col md={4} lg={4} className='px-2'>
          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 date-picker-wrapper">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Col>

        <Col md={4} lg={4} className='px-2'>
          <div className="mb-3 date-picker-wrapper">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={5}
              dateFormat="dd/MM/yyyy, hh:mm aa"
              timeCaption="Time"
              className="form-control date-picker"
              placeholderText="dd/mm/yyyy, --:-- --"
            />
          </div>
        </Col>

        <Col md={4} lg={4} className='px-2'>
          <FloatingLabel controlId="floatingSelectDepartment" className="mb-3">
            <Form.Select aria-label="Select Department" className='form-control date-picker-wrapper'>
              <option>Select Department</option>
              <option value="1">Department 1</option>
              <option value="2">Department 2</option>
              <option value="3">Department 3</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md={4} lg={4} className='px-2'>
          <FloatingLabel controlId="floatingSelectDoctor" className="mb-3">
            <Form.Select aria-label="Select Doctor" className='form-control date-picker-wrapper'>
              <option>Select Doctor</option>
              <option value="1">Doctor 1</option>
              <option value="2">Doctor 2</option>
              <option value="3">Doctor 3</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md={12} lg={12} className='px-2 mt-3'>
          <FloatingLabel controlId="floatingTextarea2" label="Message(optional)">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </Form>
  );
}

export default FormInput;
