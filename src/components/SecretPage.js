import React, { useState } from "react";
import "./SecretPage.css";
import Gallery from "./Gallery";

const SecretPage = () => {
  const [showGallery, setShowGallery] = useState(false);

  if (showGallery) {
    return (
      <div className="secret-container">
        <button className="back-btn" onClick={() => setShowGallery(false)}>
          ⬅️ Volver
        </button>
        <Gallery />
      </div>
    );
  }

  return (
    <div className="secret-container">
      <h1>🧡 Te amo 🧡</h1>
      <p>
        Este espacio está hecho solo para ti.  
        Cada línea, cada color, cada pedacito de esta página lleva mi cariño.  
        Gracias por ser parte de mi vida ❤️ </p>

        <p>
        En serio no sabes cuánto te amo y lo feliz que me haces.  
        Eres mi persona favorita en el mundo 🌍
        hemos pasado por tantas cosas juntos que a veces me cuesta creerlo y asimilar todo 
        pese que hayan pasado 6 meses se siente como si llevaramos mucho mas juntos, contigo cada cosas
        a sido un aprendizaje y una experiencia hermosa, me has enseñado tanto y me has hecho tan feliz que no tengo palabras para describirlo.
        Gracias por cada momento, por cada risa, por cada abrazo y por cada palabra de aliento. 
        Eres increíble y me siento muy afortunado de tenerte a mi lado.
        Te amo con todo mi corazón y siempre lo haré. 
        Eres mi todo, mi amor eterno 💖
      </p>
      <p> ha sido una locura vivir todo contigo y es algo que he vivido con todas mis fuerzas
        y es que no hay nada mas bonito que vivir el amor contigo. se que no he sido perfecto, se que he cometido errores
        pero cada error me ha servido para aprender y crecer a tu lado, gracias por tu paciencia y por tu amor incondicional.
        prometo seguir esforzandome cada dia para ser mejor para ti y para nosotros. 
        Te amo mas de lo que las palabras pueden expresar y siempre lo hare. Gracias por ser mi novia, mi compañera y mi mejor amiga.
        </p>

        <p>
        Feliz 6 meses mi amor, que sean muchos mas llenos de amor, felicidad y aventuras juntos. 
        Te agradezco desde lo mas profundo tomar la decision de tomar tu mano y caminar juntos en esta aventura llamada vida.
      </p>

      <div className="hearts">
        <span>❤️</span>
        <span>💚</span>
        <span>🖤</span>
      </div>

    <div>
        <h2>🎵 Canción Especial 🎵</h2>
<iframe width="560" height="315" src="https://www.youtube.com/embed/jhx3hYS__JI?si=nfRdCYxRU7pO3kCJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>


      <button className="gallery-btn" onClick={() => setShowGallery(true)}>
        Ver nuestra galería 📸
      </button>
    </div>
  );
};

export default SecretPage;
