import React from "react";
import "./Gallery.css";

import foto1 from "../assets/fotos/foto1.jpg";
import foto2 from "../assets/fotos/foto2.jpg";
import foto3 from "../assets/fotos/foto3.jpg";
import foto4 from "../assets/fotos/foto4.jpg";
import foto5 from "../assets/fotos/foto5.jpg";
import foto6 from "../assets/fotos/foto6.jpg";
import foto7 from "../assets/fotos/foto7.jpg";
import foto8 from "../assets/fotos/foto8.jpg";
import foto9 from "../assets/fotos/foto9.jpg";
import foto10 from "../assets/fotos/foto10.jpg";
import foto11 from "../assets/fotos/foto11.jpg";

const fotos = [
  foto1, foto2, foto3, foto4, foto5,
  foto6, foto7, foto8, foto9, foto10, foto11
];

const Gallery = () => {
  return (
<div className="gallery-container">
  <h2>📸 Nuestros Momentos 📸</h2>
  <div className="gallery-scroll">
    {fotos.map((foto, index) => (
      <div key={index} className="gallery-item">
        <img src={foto} alt={`foto ${index + 1}`} />
      </div>
    ))}
  </div>
</div>


  );
};

export default Gallery;
