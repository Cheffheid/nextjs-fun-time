import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout home>
      <header>
        <h1 className={utilStyles.heading2Xl}>Welcome to Nextjs Happy Fun Time</h1>
      </header>
      <div className={styles.grid}>
        <Link href="/classes">
          <a className={styles.card}>
            <Image
              src="/images/classes.jpg"
              height={160}
              width={256}
              alt=""
            />
            <h2>Classes &rarr;</h2>
          </a>
        </Link>
      </div>
    </Layout>
  )
}
