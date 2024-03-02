import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import scss from './CollumPage.module.scss';

const CollumPage = () => {
  return (
    <div className={scss.container}>
      <Header/>
      <Footer/>
    </div>
  );
};

export default CollumPage;