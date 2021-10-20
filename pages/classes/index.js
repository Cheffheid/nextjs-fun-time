import Layout from '../../components/layout'
import Card from '../../components/card'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/Home.module.css'

export default function Classes( classes ) {
  return (
    <Layout>
      <header>
        <h1 className={utilStyles.heading2Xl}>Classes</h1>
      </header>
      <div className={utilStyles.grid}>
        {classes.classes.results.map( ( dndClass ) => (
            <Card 
                link={`/classes/${dndClass.index}`}
                image={`/images/${dndClass.index}.jpg`}
                text={dndClass.name}
                key={dndClass.index}
            />
        ) ) }
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(
    process.env.API_BASE_URL + '/classes/?format=json',
    {
      method: 'GET',
    }
  );

  const classes = await res.json();

  if ( classes.errors ) {
    console.error( classes.errors );

    throw new Error( 'Failed to fetch API' );
  }

  return {
    props: { classes },
  };
}