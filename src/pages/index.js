// サイトホーム
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '@/components/Layout'
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
  <Layout home>
    <Head><title>{siteTitle}</title></Head>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <p>
        宮崎大学の学生です。関数型プログラミングが好きです。(得意とは言ってない)
      </p>
    </section>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2>🗑 bizyutyuのページ</h2>
      <div className={styles.grid}>
        <article>
          <Link href="/about">
            <img src="/images/drink.png" className={styles.thumbnailImage}/>
          </Link>
          <a className={utilStyles.boldText}>ABOUT ME!</a>
        </article>

        <article>
          <Link href="/works">
            <img src="/images/robot.png" className={styles.thumbnailImage}/>
          </Link>
          <a className={utilStyles.boldText}>WORKS</a>
        </article>

        <article>
          <Link href="/hobbies">
            <img src="/images/pukuzoma.png" className={styles.thumbnailImage}/>
          </Link>
          <a className={utilStyles.boldText}>HOBBIES</a>
        </article>

        <article>
          <Link href="/posts">
            <img src="/images/kigan.png" className={styles.thumbnailImage}/>
          </Link>
          <a className={utilStyles.boldText}>POSTS</a>
        </article>
      </div>

    </section>


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
