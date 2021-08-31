import React from "react";

import { Layout } from "../src/components/Layout";
import "../i18n.js";

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

export default Index