import Layout from '../../components/layout'
import { getAllClasses } from '../../lib/classes'
import utilStyles from '../../styles/utils.module.css'

export default function DNDClass( class_data ) {
  return (
    <Layout>
      <header>
        <h1 className={utilStyles.heading2Xl}>Classes</h1>
      </header>

      {JSON.stringify(class_data)}
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const request = await fetch( `${process.env.API_BASE_URL}/classes/${params.name}/?format=json` );
  const request_json = await request.json();

  if ( request_json.errors ) {
    console.error( request_json.errors );

    throw new Error( 'Failed to fetch API' );
  }

  return {
    props: { request_json },
  };
}

export async function getStaticPaths() {
    const paths = await getAllClasses()

    return {
      paths,
      fallback: false
    }
}