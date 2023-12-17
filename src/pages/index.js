import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '@/components/Layout'
import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

// SSGによるプリレンダリング
export async function getStaticProps(){
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// SSRによるプリレンダリング（お試し。ユーザーボードなど変更が頻繁に起こる部分にSSRを使う）
export async function getServerSideProps(context){
  return{
    props: {
      // コンポーネントに渡すためのPropsが入る
    },
  };
}

export default function Home({allPostsData}) {
  return (
  <Layout>
    <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
      <p>
        私は宮崎大学の学生です。好きな言語はHaskellです。
      </p>
    </section>

    <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
      <h2>🗑 bizyutyuのページ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({ id, title, date, thumbnail }) => (
        <article key={id}>
          <Link href={`/posts/${id}`}>
            <img src={`${thumbnail}`} className={styles.thumbnailImage}/>
          </Link>
        {/* <Link href="/"> */}
          <a className={utilStyle.boldText}>{title}</a>
        {/* </Link> */}
        <br />
        <small className={utilStyle.lightText}>{date}</small>
      </article>
        ))}
      </div>
    </section>
 
  </Layout>
  );
}
