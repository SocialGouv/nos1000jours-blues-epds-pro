import React from "react";
import Link from "next/link";

const LightLink = ({ href, children }) => (
  <Link href={href} passHref>
    <a href={href}>{children}</a>
  </Link>
);

const Separator = () => (
  <span style={{ color: "black", marginRight: 5 }}>-</span>
);

export function Footer() {
  return (
    <footer className="content">

      <div className="title">La Fabrique Numérique des Ministères Sociaux</div>
      <div className="container text-center">
        <ul className="list-inline">
          <li className="list-inline-item">
            <LightLink href="/cgu">Condititions générales</LightLink>
          </li>
          <Separator />
          <li className="list-inline-item">
            <LightLink href="/mentions-legales">Mentions légales</LightLink>
          </li>
          <Separator />
          <li className="list-inline-item">
            <LightLink href="/politique-confidentialite">
              Politique de confidentialité
            </LightLink>
          </li>
        </ul>
      </div>

      <Style />
    </footer >
  );
}

const Style = () => (
  <style jsx>{`
  .content {
    background-color: #EBF6F8;
  }

  .title {
    color: #26366E;
    font-size: 24px;
    text-align: center;
  }

  a {
    color: black;
    font-size: 0.8em;
  }
  `}</style>
);
