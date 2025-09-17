import React from "react";
import { StylesFooter } from "./Footer.styled";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <StylesFooter>
      <div className="content-section">
        <div className="social-medias">
          <Link href="https://www.instagram.com/starwars/" target="_blank">
            <FaInstagram />
          </Link>
          <Link href="https://www.youtube.com/@StarWars" target="_blank">
            <FaYoutube />
          </Link>
          <Link href="https://www.facebook.com/StarWars/" target="_blank">
            <FaFacebook />
          </Link>
        </div>
        <div className="text">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c361645-11b7-4abc-8219-1d7a2882801e/dds2ge0-32e7c0d2-0438-497b-b7a6-281fff1912cf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi84YzM2MTY0NS0xMWI3LTRhYmMtODIxOS0xZDdhMjg4MjgwMWUvZGRzMmdlMC0zMmU3YzBkMi0wNDM4LTQ5N2ItYjdhNi0yODFmZmYxOTEyY2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7w2v2YakJzSP-bbKF0sAVjY7I-YDyC78kAkzBDJd7GQ"
            alt="Imagem do Obi-Wan"
          />
          <p>
            &copy; Site criado por{" "}
            <a
              href="https://grodrigues10.github.io/Portfolio-Front-end-Developer/"
              target="_blank"
            >
              Gabriel Rodrigues
            </a>
          </p>
          <img
            src="https://pngimg.com/d/darth_vader_PNG14.png"
            alt="Imagem do Darth Vader"
          />
        </div>
      </div>
    </StylesFooter>
  );
}

export default Footer;
