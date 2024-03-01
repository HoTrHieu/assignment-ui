import React from 'react';
import scss from './Footer.module.scss';

const Footer = () => {
  const items = [
    '会員登録',
    '運営会社',
    '利用規約',
    '個人情報の取扱について',
    '特定商取引法に基づく表記',
    'お問い合わせ'
  ]

  return (
    <div className={scss.container}>
      {
        items.map(item => <span className={scss.item}>{item}</span>)
      }
    </div>
  );
};

export default Footer;