// import React from 'react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { css } from '_panda/css';

import GNB from '@/components/Layout/GNB';
import Layout from '@/components/Layout/Layout';

import RightSection from './RightSection';

const LazyProfileSection = dynamic(() => import('./ProfileSection'), { ssr: false });

function Mypage() {
  return (
    <Layout>
      <GNB />
      <main className={mainStyle}>
        <Suspense fallback={<section></section>}>
          <LazyProfileSection />
        </Suspense>
        <RightSection />
      </main>
    </Layout>
  );
}

export default Mypage;

const mainStyle = css({
  padding: '170px 0 0',
  display: 'grid',
  justifyContent: 'center',
  gap: '100px',
  gridTemplateColumns: '230px 1fr',
  maxWidth: '1200px',
  width: 'fit-content',
  margin: '0 auto',
});