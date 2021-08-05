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
  const { t } = useTranslation('common');

  return (
    <div className="container">

      <div className="section-heading text-center">
        <h2>{t('header-name')}</h2>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer', 'espace-professionnel']),
  },
})

export default Index