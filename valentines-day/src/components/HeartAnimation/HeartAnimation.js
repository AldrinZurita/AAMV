import React from "react";
import "./HeartAnimation.css"; // Archivo de estilos para los corazones

function HeartAnimation() {
  const hearts = Array.from({ length: 20 }).map((_, i) => ({
    left: `${Math.random() * 100}vw`,
    animationDuration: `${Math.random() * 3 + 2}s`,
    fontSize: `${Math.random() * 20 + 10}px`
  }));

  return (
    <div className="hearts-container">
      {hearts.map((style, i) => (
        <span key={i} className="heart" style={style}>
          ❤️
        </span>
      ))}
    </div>
  );
}

export default HeartAnimation;
