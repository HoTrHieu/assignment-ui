import React from 'react';
import scss from './Header.module.scss';
import { ReactComponent as Logo } from 'asset/Icon/logo.svg';
import { ReactComponent as Noted } from 'asset/Icon/noted.svg';
import { ReactComponent as Challeng } from 'asset/Icon/challeng.svg';
import { ReactComponent as Info } from 'asset/Icon/info.svg';
import { ReactComponent as Menu } from 'asset/Icon/menu.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const ridirectPage = (url) => {
    console.log('URL: ', url);
    navigate(url);
  }

  return (
    <div className={scss.container}>
      <Logo/>
      <div className={scss.wrapAction}>
        <div className={scss.action}
          onClick={() => ridirectPage('/')}
        >
          <Noted/>
          <span>
            自分の記録
          </span>
        </div>
        <div className={scss.action}
          onClick={() => ridirectPage('/record')}
        >
          <Challeng/>
          <span>チャレンジ</span>
        </div>
        <div className={scss.action}
          onClick={() => ridirectPage('/collumn')}
        >
          <Info/>
          <span>お知らせ</span>
        </div>
        <Menu/>
      </div>
    </div>
  );
};

export default Header;