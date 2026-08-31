import { useState } from "react";
import { sketches } from '../data/sketches.js';

export default function Sketchbook() {
  const [selectedArtId, setSelectedArtId] = useState(null);

  const selectedArt = sketches.find((sketch) => sketch.id === selectedArtId);

  return (
    <>
      <h2>Sketchbook</h2>

      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {sketches.map((sketch) => (
          <div key={sketch.id}>
            <img
              src={sketch.image}
              alt={sketch.title}
              onClick={() => setSelectedArtId(sketch.id)}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              style={{
                width: "100%",
                marginBottom: "0.5rem",
                cursor: "zoom-in",
                userSelect: "none",
              }}
            />
            <div style={{ textAlign: "center", fontSize: "1rem" }}>
              {sketch.title}
            </div>
          </div>
        ))}
      </div>

      {selectedArt && (
        <Lightbox
          art={selectedArt}
          onClose={() => setSelectedArtId(null)}
        />
      )}
    </>
  );
}

function Lightbox({ art, onClose }) {
  return (
    <div
      onClick={onClose}
      onContextMenu={(e) => e.preventDefault()} 
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        cursor: "zoom-out",
      }}
    >
      <img
        src={art.image}
        alt={art.title}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          objectFit: "contain",
          userSelect: "none",
          pointerEvents: "none", 
        }}
      />
      <div style={{ color: "white", marginTop: "1rem", fontSize: "1.25rem" }}>
        {art.title}
      </div>
    </div>
  );
}
