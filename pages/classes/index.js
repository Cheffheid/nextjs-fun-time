import Layout from '../../components/layout'
import { getAllClasses } from '../../lib/classes'
import Card from '../../components/card'
import utilStyles from '../../styles/utils.module.css'

export default function Classes( classes ) {
  return (
    <Layout>
      <header>
        <h1 className={utilStyles.heading2Xl}>Classes</h1>
      </header>
      <div className={utilStyles.grid}>
        {classes.classes.map( ( dndClass ) => (
          <Card 
              link={`/classes/${dndClass.params.name}`}
              image={{
                  url: `/images/${dndClass.params.name}.jpg`,
                  height: 194,
                  width: 310,
              }}
              text={dndClass.params.friendly_name}
              key={dndClass.params.name}
              width='third'
          />
        ) ) }
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const classes = await getAllClasses();

  return {
    props: { classes },
  };
}