import { useTranslation } from "next-i18next"
import React, { useEffect, useState } from "react"
import { Container, Nav as BSNav, Navbar } from "react-bootstrap"

export function Nav() {
  const { t } = useTranslation("common")
  const [isResourcesPage, setResourcesPage] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    setResourcesPage(
      window.location.href.includes("annexes/ressources-parents")
    )
  }, [])

  return (
    <Navbar sticky="top" bg="white" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div>
          <a
            href="/comprendre-test"
            alt="Retour à l'accueil"
            style={
              isResourcesPage
                ? { pointerEvents: "none" }
                : { pointerEvents: "auto" }
            }
          >
            <img
              src="/img/logo-1000j.svg"
              height={75}
              style={{ margin: 15 }}
              alt="Logo 1000 premiers jours"
            />
          </a>
        </div>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <BSNav>
            <a
              className="nav-link"
              href="mailto:contact-nos1000jours@fabrique.social.gouv.fr&subject=Démarrage"
            >
              {t("nav-contact")}
            </a>
          </BSNav>
        </Navbar.Collapse>
      </Container>
      <NavStyle />
    </Navbar>
  )
}

const NavStyle = () => (
  <style jsx="true">{`
    .nav-link {
      margin: 0 10px;
      color: var(--bleu-texte) !important;
    }
  `}</style>
)
