import React from "react";
import Link from "next/link";

import { useTranslation } from 'next-i18next';
import { Row, Col } from "react-bootstrap";

const LightLink = ({ href, children }) => (
  <Link href={href} passHref>
    <a href={href}>{children}</a>
  </Link>
);

const Separator = () => (
  <span style={{ color: "black", marginRight: 5 }}>-</span>
);

export function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer className="content-footer">

      <Row className="content-row">
        <img
          src="/img/logo-republique-francaise.png"
          height={60}
          alt="Ministère des solidarités et de la santé"
        />

        <Col>
          <div className="title">{t('la-fabrique')}</div>
          <div className="container text-center box3">
            <ul className="list-inline">
              <li className="list-inline-item">
                <LightLink href="/cgu">{t('cgu')}</LightLink>
              </li>
              <Separator />
              <li className="list-inline-item">
                <LightLink href="/mentions-legales">{t('mentions-legales')}</LightLink>
              </li>
              <Separator />
              <li className="list-inline-item">
                <LightLink href="/politique-confidentialite">
                  {t('politique-confidentialite')}
                </LightLink>
              </li>
            </ul>
          </div>
        </Col>
      </Row>


      <Style />
    </footer >
  );
}

const Style = () => (
  <style jsx>{`
  .content-footer {
    background-color: #EBF6F8;
    border-radius: 25px 25px 0 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .content-row {
    align-items: center;
    margin-left: 20px;
  }

  .title {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    line-height: 33px;
    color: var(--bleu-texte);
  }

  a {
    color: black;
    font-size: 12px;
    line-height: 22px;
  }
  `}</style>
);
