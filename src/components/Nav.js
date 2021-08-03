import React from "react";
import Link from "next/link";
import { Container, Nav as BSNav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const NavLink = styled(Link).attrs({ as: "a" })`
  font-weight: bold !important;
  margin: 0 10px;
`;

export function Nav() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div>
          <a href="/#page-top" alt="Retour à l'accueil">
            <img
              src="/img/logo-1000j.png"
              width={100}
              height={101}
              alt="Logo 1000 premiers jours"
            />
          </a>
        </div>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end">
          <BSNav>
            <NavLink href="/pourquoi">Pourquoi les 1000 premiers jours ?</NavLink>
            <NavLink href="/comment">Comment ce service fonctionne-t-il ?</NavLink>
            <NavLink href="/qui">Qui sommes-nous ?</NavLink>
            <NavLink href="/contact">Nous contacter</NavLink>
            <NavLink href="/professionnel">Espace professionnel</NavLink>
          </BSNav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
