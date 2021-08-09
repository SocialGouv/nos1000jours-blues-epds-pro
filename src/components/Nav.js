import React from "react";
import { Container, Nav as BSNav, Navbar } from "react-bootstrap";
import { useTranslation } from 'next-i18next';

export function Nav() {
  const { t } = useTranslation('common');

  return (
    <Navbar sticky="top" bg="white" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div>
          <a href="/espace-professionnel" alt="Retour à l'accueil">
            <img
              src="/img/logo-1000j.png"
              height={100}
              alt="Logo 1000 premiers jours"
            />
          </a>
        </div>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end">
          <BSNav>
            <a className="nav-link" href="/pourquoi">{t('nav-pourquoi')}</a>
            <a className="nav-link" href="/comment">{t('nav-comment')}</a>
            <a className="nav-link" href="/qui">{t('nav-qui')}</a>
            <a className="nav-link" href="/contact">{t('nav-contact')}</a>
            <a className="nav-link" href="/espace-professionnel">{t('nav-professionnel')}</a>
          </BSNav>
        </Navbar.Collapse>

      </Container>
      <NavStyle />
    </Navbar>
  );
}

const NavStyle = () => (
  <style jsx>{`
  .nav-link {
    margin: 0 10px;
    color: var(--bleu-texte) !important;
    font-size: 13px;
  }
  `}</style>
);
