import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/Home.module.css'

export default function Classes( classes ) {
  return (
    <Layout>
      <header>
        <h1 className={utilStyles.heading2Xl}>Classes</h1>
      </header>
      <div className={styles.grid}>
        {classes.classes.results.map( ( dndClass ) => (
            <Link href={`/classes/${dndClass.index}`} key={dndClass.index}>
                <a className={styles.card}>
                <Image
                    src={`/images/{dndClass.index}.jpg`}
                    height={160}
                    width={256}
                    alt=""
                />
                    <h2>{dndClass.name} &rarr;</h2>
                </a>
            </Link>
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