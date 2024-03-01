import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import scss from './TopPage.module.scss';
import LeftImage from 'asset/images/d01.jpg';
import RightImage from 'asset/images/main_graph.jpg';

const TopPage = () => {
  return (
    <div className={scss.container}>
      <Header/>
      <div className={scss.content}>
        <div className={scss.banner}>
          <img 
            src={LeftImage}
            className={scss.left}
            alt='#'
          />
          <img src={RightImage} 
            className={scss.right}
            alt='#'
          />
        </div>
        <div className={scss.miniMenu}>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TopPage;