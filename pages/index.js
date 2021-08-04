import React from "react";

import { Layout } from "../src/components/Layout";

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Index = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

function Home() {
  const { t } = useTranslation('home');

  return (
    <div className="container">

      <div className="section-heading text-center">
        <h2>{t('title')}</h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>

      <Style />
    </div>
  );
}

const Style = () => (
  <style jsx>{`
  body {
    font-family: "Marianne";
    min-height: 100%;
  }

  html {
    height: 100%;
  }

  h2 {
    color: var(--primary);
  }
  `}</style>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home', 'footer', 'espace-professionnel']),
  },
})

export default Index