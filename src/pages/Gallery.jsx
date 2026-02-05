import { artworks } from '../data/artworks.js';

export default function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        {artworks.map((art) => (
          <img
            key={art.id}
            src={art.image}
            alt={art.title}
            style={{ width: "100%", maxWidth: "400px" }}
          />
        ))}
      </div>
    </div>
  );
}