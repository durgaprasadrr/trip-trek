import React, { useEffect, useState } from "react";

const API = "http://localhost:5000/api/tours";

export default function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch(API).then(res => res.json()).then(setTours);
  }, []);

  return (
    <div>
      <h1>Trip Trek</h1>
      {tours.map(t => (
        <div key={t.id}>
          <h3>{t.name}</h3>
          <p>{t.location}</p>
        </div>
      ))}
    </div>
  );
}
