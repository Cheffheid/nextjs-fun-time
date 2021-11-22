import Card from '../components/card'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <header>
        <h1 className={utilStyles.heading2Xl}>
          Welcome to Nextjs Happy Fun Time
        </h1>
      </header>
      <div className={utilStyles.grid}>
        <Card
          link="/classes"
          image={{
            url: "/images/classes.jpg",
            height: 160,
            width: 256,
          }}
          text="Classes"
        />
      </div>
    </Layout>
  )
}
