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
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})

export const STORAGE_TOTAL_SCORE = "totalScore";
export const STORAGE_EMAIL_PRO = "emailPro";
export const STORAGE_NOM_PRO = "nomPro";

export const STORAGE_NOM_PATIENT = "nomPatient";
export const STORAGE_PRENOM_PATIENT = "prenomPatient";
export const STORAGE_GENRE_PATIENT = "genrePatient";

export const PATTERN_EMAIL = "[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}";

export default Index