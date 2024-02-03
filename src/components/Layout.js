import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

const name = "bizyutyu";
export const siteTitle = "Blog by ${name}";

// ヘッダ画像切替用コンポーネント
function HandleHeaderImage(index) {
  // ヘッダ画像が切り替わる
  switch (index) {
    case 0: // indexが0の場合
      return <img src="/images/drink.png" className={styles.thumbnailImage} />;
    case 1: // indexが1の場合
      return <img src="/images/robot.png" className={styles.thumbnailImage} />;
    case 2: // indexが2の場合
      return <img src="/images/pukuzoma.png" className={styles.thumbnailImage} />;
    case 3: // indexが3の場合
      return <img src="/images/kigan.png" className={styles.thumbnailImage} />;
    default: // その他の場合
      return <img src="/images/drink.png" className={styles.thumbnailImage} />;
  }
};

// ロゴ（アイコン＋名前）
function Logo() {
  return (
      <>
        <Link href="/" className={styles.navLogo}>
        <img 
        src="/images/profile.png" 
        className={`${utilStyles.borderCircle} ${styles.headerHomeImg}`}
        />
        <h3 className={styles.headerText}>{name}</h3>
        </Link>
      </>
  );
}

// ハンバーガーメニュー切替用コンポーネント
function HandleHamburgerMenu() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button className={isActive ? 'openbtn1 active' : 'openbtn1'} onClick={handleClick}>
      Click me
    </button>
  );
}

function HamburgerMenu(){
  return (
    <div class="openbtn1"><span></span><span></span><span></span></div>
  );
}

// メニューバー
function NavigationBar() {
  const items = [  { label: 'ABOUT ME', url: 'about-me' },
                  { label: 'WORKS', url: 'works' },
                  { label: 'HOBBIES', url: 'hobbies' },
                  { label: 'POSTS', url: 'posts' }];
  const itemContents = ['Content 1', 'Content 2', 'Content 3', 'Content 4'];
  
  const [activeItem, setActiveItem] = useState(0);

  // ページが読み込まれた後にローカルストレージから値を取得
  useEffect(() => {
    const initialItem = localStorage.getItem('activeItem');
    if (initialItem !== null) {
      setActiveItem(initialItem);
    }else{
      setActiveItem(0);
    }
  }, []);

  // activeItemが変更されたときにローカルストレージを更新
  useEffect(() => {
    localStorage.setItem('activeItem', activeItem);
  }, [activeItem]);

  return (
    <div className={styles.navBar}>
      <Logo></Logo>
    <ul className={styles.navList}>
      {items.map(({label, url}, index) => (
        <li key={index} style={{ cursor: 'pointer' }} onClick={() => setActiveItem(index)}>
          <Link href = {`/${url}`}>
          {label}
          </Link>
        </li>
      ))}
    </ul>
    {itemContents.map((content, index) => (
      <div key={index} style={{ display: activeItem === index ? 'block' : 'none' }}>
        {HandleHeaderImage(index)}
        {content}
      </div>
    ))}
    </div>
  );
}

function Layout({children, home}) {
  return (
  <div className={styles.container}>
    <header className={styles.header}>
      
      <NavigationBar></NavigationBar>
  
    </header>
    <main>{children}</main>
    {!home && (
      <div>
        <Link className={utilStyles.backToHome} href="/">HOMEへ戻る</Link>
      </div>
    )}
  </div>
  );
}

export default Layout;

