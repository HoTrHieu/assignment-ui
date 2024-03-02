import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import scss from './TopPage.module.scss';
import LeftImage from 'asset/images/d01.jpg';
import RightImage from 'asset/images/main_graph.jpg';
import {ReactComponent as Morning} from 'asset/Icon/morning.svg';
import {ReactComponent as Lunch} from 'asset/Icon/lunch.svg';
import {ReactComponent as Dinner} from 'asset/Icon/dinner.svg';
import {ReactComponent as Snack} from 'asset/Icon/snack.svg';
import Image2 from 'asset/images/d02.jpg';
import Image3 from 'asset/images/l01.jpg';
import Image4 from 'asset/images/l02.jpg';
import Image5 from 'asset/images/l03.jpg';
import Image6 from 'asset/images/m01.jpg';
import Image7 from 'asset/images/m02.jpg';
import Image8 from 'asset/images/m03.jpg';

const listImage = [
  LeftImage,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
]

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
          <Morning/>
          <Lunch/>
          <Dinner/>
          <Snack/>
        </div>
        <div className={scss.listFoot}>
          {
            listImage.map(item => <img
              src={item}
              alt='#'
            />)
          }
        </div>
        <div className={scss.wrapBtn}>
          <button className={scss.btn}>
            記録をもっと見る
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TopPage;