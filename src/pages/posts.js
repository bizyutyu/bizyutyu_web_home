// 投稿用ページ
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '@/components/Layout'
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

// プリレンダリング(SSG)
export async function getStaticProps(){
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// // プリレンダリング(SSR)（変更が頻繁に起こるページはSSR）
// export async function getServerSideProps(context){
//   return{
//     props: {
//       // コンポーネントに渡すためのPropsを入れる
//     },
//   };
// }

export default function Home({allPostsData}) {
  return (
  <Layout>
    <Head><title>{siteTitle}</title></Head>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2>💬 POSTS</h2>
      <div className={styles.grid}>
        {allPostsData.map(({ id, title, date, thumbnail }) => (
        <article key={id}>
          <Link href={`/posts/${id}`}>
            <img src={`${thumbnail}`} className={styles.thumbnailImage}/>
          </Link>
        {/* <Link href="/"> */}
          <a className={utilStyles.boldText}>{title}</a>
        {/* </Link> */}
        <br />
        <small className={utilStyles.lightText}>Date:{date}</small>
      </article>
        ))}
      </div>
    </section>
    
    {/* いずれは自作したAPIからデータを取得したいという野望があるので残しておく */}
    {/* async function makeRequest(url, options) {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }

    // Example usage:
    const apiUrl = 'https://api.example.com/data';
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers as needed
      },
      // Add any additional options as needed
    };

    const responseData = await makeRequest(apiUrl, requestOptions);
    console.log(responseData); */}

 
  </Layout>
  );
}
