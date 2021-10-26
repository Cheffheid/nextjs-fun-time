import Layout from '../../components/layout'
import BasicFeatures from '../../components/classes/basic-features'
import Image from 'next/image'
import { getAllClasses } from '../../lib/classes'
import utilStyles from '../../styles/utils.module.css'

export default function DNDClass( class_data ) {
  return (
    <Layout>
      <header>
        <h1 className={utilStyles.heading2Xl}>{class_data.request_json.name}</h1>
      </header>

      <Image
          src={`/images/${class_data.request_json.name}.jpg`}
          layout="responsive"
          height="1080"
          width="1920"
          alt=""
      />

      <BasicFeatures
        classData={class_data.request_json}
      />
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