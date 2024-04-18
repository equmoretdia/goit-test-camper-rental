import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
    <div>
      <h2>Book your campervan now</h2>
      <p>Stay connected! we are always ready to help you</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bookingDate">Booking Date:</label>
          <DatePicker
            selected={formData.bookingDate}
            dateFormat="dd/MM/yyyy"
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
