 import React from "react";
import "./Data.css";
import { Link } from "react-router-dom";

export default function Data() {
  const place = [
    {
      id: 1,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    //    location: "Prayagraj",
 //   category: "Historical",
    },
     {
      id: 2,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    },
     {
      id: 3,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    },
     {
      id: 4,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    },
     {
      id: 1,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    },
     {
      id: 1,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    },
     {
      id: 1,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    },
     {
      id: 1,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    },
     {
      id: 1,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    },
     {
      id: 1,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    },
     {
      id: 1,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    },
     {
      id: 1,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    },
     {
      id: 1,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
    },
  ];

  return (
    <div className="container">
      {place.map((item) => (
        <Link to={`place/${item.id}`} key={item.id} className="card"> 
          <img src={item.image} alt={item.name} className="card-img" />

          <div className="card-body">
            <h2>{item.name}</h2>
            <p>{item.shortdes}</p>

            <div className="card-footer">
              <span className="rating">⭐ {item.rating}</span>
              <button className="btn">View Details</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

