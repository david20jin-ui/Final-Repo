import React from 'react';

export default function Testimonials() {
  const items = [
    { name: 'Tilly Young', rating: '4.5 ★' },
    { name: 'Mark Jones', rating: '5.0 ★' },
    { name: 'Brian Nguyen', rating: '4.2 ★' },
  ];

  return (
    <div className="testimonials" id="testimonials">
      {items.map((it) => (
        <div className="quote" key={it.name}>
          <strong>{it.name}</strong>
          <div>{it.rating}</div>
        </div>
      ))}
    </div>
  );
}
