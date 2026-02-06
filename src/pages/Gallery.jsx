import { useState } from "react";
import { artworks } from '../data/artworks.js';

export default function Gallery() {
  const [selectedArtId, setSelectedArtId] = useState(null);

  const selectedArt = artworks.find((art) => art.id === selectedArtId);

  return (
    <>
      <h2>Gallery</h2>

      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {artworks.map((art) => (
          <div key={art.id}>
            <img
              src={art.image}
              alt={art.title}
              onClick={() => setSelectedArtId(art.id)}
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
              {art.title}
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
