import React, { useEffect, useState } from "react";
import "./Data.css";
import { Link } from "react-router-dom";

export default function Data() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [debounce, setdebounce] =useState("");

  useEffect(()=>{
   const timer =setTimeout(()=>{
    setdebounce(search);
   },500);
   return ()=>clearTimeout(timer);
  },[search]);

  const place = [
    {
      id: 1,
      name: "Sangam",
      shortdes: "Holy river confluence.",
      image: "/img/s.jpg",
      rating: 4.3,
      category: "Sangam",
    },
    {
      id: 2,
      name: "Allahabad Fort",
      shortdes: "Built by Akbar near Sangam.",
      image: "/img/s.jpg",
      rating: 4.3,
      category: "Historical",
    },
  ];

  const filteredPlaces = place.filter((p) => {
    const searchMatch = p.name.toLowerCase().includes(debounce.toLowerCase());
    const categoryMatch = category === "All" || p.category === category;
    return searchMatch && categoryMatch;
  });

  return (
    <>
      {/* SEARCH */}
      <input
        type="text"
        value={search}
        placeholder="Search your cool places here"
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      {/* FILTER BUTTONS */}
      <div className="filters">
        {["All", "Sangam", "Historical"].map((p) => (
          <button
            key={p}
            onClick={() => setCategory(p)}
            className={category === p ? "active" : ""}
          >
            {p}
          </button>
        ))}
      </div>

      {/* CARDS (IMPORTANT FIX HERE) */}
      <div className="container">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((item) => (
            <Link to={`/place/${item.id}`} key={item.id} className="card">
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
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>No places found 😢</h3>
        )}
      </div>
    </>
  );
}