import React, { useState, useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';

export default function BookingForm({ times = [], updateTimes = () => {}, reserve: reserveProp, submitForm } ) {
  const ctx = useContext(ReservationContext) || {};
  const reserveFromContext = ctx.reserve;
  const reserve = reserveProp || reserveFromContext;

  // allow an external submitAPI to be present globally (in index.html) — tests will mock it
  const submitAPI = typeof window !== 'undefined' && typeof window.submitAPI === 'function' ? window.submitAPI : undefined;

  // static heading for tests and UX
  const heading = 'Book Now';

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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  function onChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (name === 'date') {
      updateTimes(value);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    try {
      let ok = true;
      if (typeof submitForm === 'function') {
        ok = await submitForm(values);
      } else if (typeof submitAPI === 'function') {
        // submitAPI may be async
        ok = await submitAPI(values);
      }

      if (ok) {
        // only reserve locally after successful submit
        if (typeof reserve === 'function') reserve(values);
        setSent(true);
        console.log('Booking submitted', values);
      } else {
        setSubmitError('Submission failed. Please try again.');
      }
    } catch (err) {
      setSubmitError('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
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
      <h3>{heading}</h3>
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
        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Request Reservation'}
        </button>
      </div>
      {submitError && <p className="form-error" role="alert">{submitError}</p>}
    </form>
  );
}

