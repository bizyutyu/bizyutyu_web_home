import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '@/components/Layout'
import utilStyle from "../styles/utils.module.css";

export default function Home() {
  return (
  <Layout>
    <section className={utilStyle.headingMd}>
      <p>
        私は宮崎大学の学生です。好きな言語はHaskellです。
      </p>
    </section>
    <h2>
      🗑 bizyutyuのページ
    </h2>
    <section>
      <div className={styles.grid}>
        
        <article>
          <Link href="/">
          <img src="/images/profile.png"
            className={styles.thumbnailImage}/>
          </Link>
          {/* <Link href="/"> */}
            <a className={utilStyle.boldText}>ABOUT ME!!</a>
          {/* </Link> */}
          <br />
          <small className={utilStyle.lightText}>
            December 16, 2023
          </small>
        </article>

        <article>
          <Link href="/">
          <img src="/images/profile.png"
            className={styles.thumbnailImage}/>
          </Link>
          {/* <Link href="/"> */}
            <a className={utilStyle.boldText}>ABOUT ME!!</a>
          {/* </Link> */}
          <br />
          <small className={utilStyle.lightText}>
            December 16, 2023
          </small>
        </article>

        <article>
          <Link href="/">
          <img src="/images/profile.png"
            className={styles.thumbnailImage}/>
          </Link>
          {/* <Link href="/"> */}
            <a className={utilStyle.boldText}>ABOUT ME!!</a>
          {/* </Link> */}
          <br />
          <small className={utilStyle.lightText}>
            December 16, 2023
          </small>
        </article>

        <article>
          <Link href="/">
          <img src="/images/profile.png"
            className={styles.thumbnailImage}/>
          </Link>
          {/* <Link href="/"> */}
            <a className={utilStyle.boldText}>ABOUT ME!!</a>
          {/* </Link> */}
          <br />
          <small className={utilStyle.lightText}>
            December 16, 2023
          </small>
        </article>

      </div>
    </section>
 
  </Layout>
  );
}
