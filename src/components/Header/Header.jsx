import React from 'react';
import scss from './Header.module.scss';
import { ReactComponent as Logo } from 'asset/Icon/logo.svg';
import { ReactComponent as Noted } from 'asset/Icon/noted.svg';
import { ReactComponent as Challeng } from 'asset/Icon/challeng.svg';
import { ReactComponent as Info } from 'asset/Icon/info.svg';
import { ReactComponent as Menu } from 'asset/Icon/menu.svg';

const Header = () => {
  return (
    <div className={scss.container}>
      <Logo/>
      <div className={scss.wrapAction}>
        <div className={scss.action}>
          <Noted/>
          <span>
            自分の記録
          </span>
        </div>
        <div className={scss.action}>
          <Challeng/>
          <span>チャレンジ</span>
        </div>
        <div className={scss.action}>
          <Info/>
          <span>お知らせ</span>
        </div>
        <Menu/>
      </div>
    </div>
  );
};

export default Header;