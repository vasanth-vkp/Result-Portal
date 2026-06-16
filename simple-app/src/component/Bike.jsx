import React from 'react';
import bikes from '../component/bikes';

export default function Bike() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
      }}
    >
      {bikes.map((item, index) => (
        <article key={index}>
          <img
            src={item.url}
            alt={item.name}
            width="200"
            height="200"
          />
          <p>{item.name}</p>
        </article>
      ))}
    </div>
  );
}