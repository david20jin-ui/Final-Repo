import React, { useState, useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';

export default function BookingForm() {
  const { times, reserve } = useContext(ReservationContext);

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    size: 2,
    notes: '',
  });
  const [sent, setSent] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    reserve(values);
    setSent(true);
    console.log('Booking submitted', values);
  }

  if (sent) {
    return (
      <div className="booking-confirmation">
        <h3>Thank you — your reservation request is received!</h3>
        <p>We will contact you shortly to confirm your booking.</p>
      </div>
    );
  }
  return (
    <form className="booking-form" onSubmit={onSubmit}>
      <div className="field-row">
        <label>
          Name
          <input name="name" value={values.name} onChange={onChange} required />
        </label>
        <label>
          Phone
          <input name="phone" value={values.phone} onChange={onChange} />
        </label>
      </div>

      <div className="field-row">
        <label>
          Email
          <input name="email" type="email" value={values.email} onChange={onChange} required />
        </label>
        <label>
          Party size
          <select name="size" value={values.size} onChange={onChange}>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="field-row">
        <label>
          Date
          <input name="date" type="date" value={values.date} onChange={onChange} required />
        </label>
        <label>
          Time
          <select name="time" value={values.time} onChange={onChange} required>
            <option value="">Select time</option>
            {times.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Notes (optional)
        <textarea name="notes" value={values.notes} onChange={onChange} rows={3} />
      </label>

      <div className="form-actions">
        <button type="submit" className="btn">Request Reservation</button>
      </div>
    </form>
  );
}
