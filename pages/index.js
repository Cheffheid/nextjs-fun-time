import Card from '../components/card'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout home>
      <header>
        <h1 className={utilStyles.heading2Xl}>Welcome to Nextjs Happy Fun Time</h1>
      </header>
      <div className={utilStyles.grid}>
        <Card
          link="/classes"
          image="/images/classes.jpg"
          text="Classes"
        />
      </div>
    </Layout>
  )
}
