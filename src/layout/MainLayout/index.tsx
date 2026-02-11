import MainSideBar from 'layout/MainSideBar';
import TopBanner from 'layout/TopBanner';
import React from 'react';

import styles from './styles.module.css';

const MainLayout: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => {
  return (
    <div className={styles['dreamina']}>
      <TopBanner />
      <div className={styles['main-layout']}>
        <MainSideBar />
        <div className={styles['main-layout-content']}>
          <div className={styles['main-children-content']}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
