import React from "react";
import { useParams } from "react-router-dom";
import "./Data.css";

export default function Placedetails() {

  const places = [
    {
      id: 1,
      name: "Allahabad Fort",
      shortdes: "Sangam refers to the sacred confluence of rivers, most famously the Triveni Sangam in Prayagraj, Uttar Pradesh. Here, the muddy waters of the Ganga meet the greenish-blue Yamuna alongside the mythical, subterranean Saraswati River.Famous Confluences in India",
      image: ["/img/s.jpg","/img/s1.jpg", "/img/s2.jpg"],
      rating: 4.3,
    },
    {
      id: 2,
      name: "Triveni Sangam",
      shortdes: "Holy river confluence.",
      image: ["/images/sangam.jpg"],
      rating: 4.8,
    }
  ];

  const { id } = useParams();

  const place = places.find((p) => p.id === Number(id));

  if (!place) {
    return <h3>Place not found</h3>;
  }

return (
  <div className="details">
    
<div className="image-section">
  {place.image.map((img, index) => (
    <img key={index} src={img} alt={place.name} />
  ))}
</div>

    <div className="content">
      <div className="left">
        <h1>{place.name}</h1>
        <p>{place.shortdes}</p>
      </div>

      <div className="right">
        <div className="rating-box">
          ⭐ {place.rating}
        </div>
      </div>
    </div>

  </div>
);
}