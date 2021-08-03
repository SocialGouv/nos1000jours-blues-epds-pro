import React from "react";
import Link from "next/link";

import { useTranslation } from 'next-i18next';

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
    <footer className="content">

      <div className="title">{t('la-fabrique')}</div>
      <div className="container text-center">
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
