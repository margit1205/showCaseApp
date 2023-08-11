import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import Footer from '../components/footer';





function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
     
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      
      <main>
        <HomepageFeatures />
      </main>

    </Layout>
  );
}
