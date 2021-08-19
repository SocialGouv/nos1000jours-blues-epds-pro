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
          <a href="/comprendre-test" alt="Retour à l'accueil">
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
            <a className="nav-link" href="/pourquoi" hidden>{t('nav-pourquoi')}</a>
            <a className="nav-link" href="/comment" hidden>{t('nav-comment')}</a>
            <a className="nav-link" href="/qui" hidden>{t('nav-qui')}</a>
            <a className="nav-link" href="mailto:contact-nos1000jours@fabrique.social.gouv.fr&subject=Démarrage">{t('nav-contact')}</a>
            <a className="nav-link" href="/comprendre-test">{t('nav-professionnel')}</a>
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
