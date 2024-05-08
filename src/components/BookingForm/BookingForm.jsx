import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Button } from '../Button/Button';
import { Container, Header, Form, Input } from './BookingFormStyled';

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = date => {
    setFormData({ ...formData, bookingDate: date });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Header>Book your campervan now</Header>
      <p>Stay connected! we are always ready to help you</p>
      <Form onSubmit={handleSubmit}>
        {/* <div>
          <label htmlFor="name">Name:</label> */}
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {/* </div>
        <div>
          <label htmlFor="email">Email:</label> */}
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {/* </div>
        <div>
          <label htmlFor="bookingDate">Booking Date:</label> */}
        <DatePicker
          selected={formData.bookingDate}
          dateFormat="dd/MM/yyyy"
          placeholderText="Booking date"
          onChange={handleDateChange}
        />
        {/* </div>
        <div>
          <label htmlFor="comment">Comment:</label> */}
        <textarea
          id="comment"
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
        />
        {/* </div> */}
        <Button text="Send" />
      </Form>
    </Container>
  );
};
