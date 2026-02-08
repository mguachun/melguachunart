import { Link } from "react-router-dom";

import "../App.css";

export default function Contact() {
  return (
    <section className="contact">
      <h1>Let’s Connect</h1>
      <p className="contact-sub">
        Commissions, collaborations, or just saying hi ✨
      </p>

      <div className="contact-buttons">
        <a
          href="mailto:1212malka@gmail.com"
          className="contact-btn email"
        >
          📧 Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/melissa-guachun/"
          className="contact-btn linkedin"
        >
          📧 Connect on LinkedIn
        </a>

        <a
          href="https://www.instagram.com/melguachunart"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn instagram"
        >
          📸 Instagram
        </a>

        <a
          href="https://www.etsy.com/shop/MelGuachunArt"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn shop"
        >
          🛍️ Etsy Shop
        </a>
      </div>
    </section>
  );
}
