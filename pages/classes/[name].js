import Layout from '../../components/layout'
import BasicFeatures from '../../components/classes/basic-features'
import Image from 'next/image'
import { getAllClasses } from '../../lib/classes'
import utilStyles from '../../styles/utils.module.css'

export default function DNDClass( pageData ) {
  return (
    <Layout>
      <header>
        <h1 className={utilStyles.heading2Xl}>{pageData.classData.name}</h1>
      </header>

      <Image
          src={`/images/${pageData.classData.name}.jpg`}
          layout="responsive"
          height="1080"
          width="1920"
          alt=""
      />

      <BasicFeatures
        classData={pageData.classData}
        proficiencyData={pageData.availableProficiencies}
      />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const classData = await getClassData( params.name );
  const proficiencyIndex = await indexProficiencies();
  const availableProficiencies = splitProficiencies( proficiencyIndex );

  return {
    props: { classData, availableProficiencies },
  };
}

function splitProficiencies( proficiencies ) {
  let proficiencyObject = {};

  proficiencies.forEach( proficiency => {
    if ( ! proficiencyObject.hasOwnProperty( proficiency.type ) ) {
      proficiencyObject[proficiency.type] = [];
    }

    proficiencyObject[proficiency.type].push( proficiency );
  } );

  return proficiencyObject;
}

async function getClassData( className ) {
  const request = await fetch( `${process.env.API_BASE_URL}/classes/${className}/?format=json` );
  const request_json = await request.json();

  if ( request_json.errors ) {
    console.error( request_json.errors );

    throw new Error( 'Failed to fetch API' );
  }

  return request_json;
}

async function indexProficiencies() {
  const request = await fetch( `${process.env.API_BASE_URL}/proficiencies/` );
  const proficiencies = await request.json();

  if ( proficiencies.errors ) {
    console.error( proficiencies.errors );

    throw new Error( 'Failed to fetch API' );
  }

  return await Promise.all( proficiencies.results.map( async ( proficiency ) => {
    const proficiency_request = await fetch( `${process.env.API_HOST}${proficiency.url}` );
    const proficiency_data = await proficiency_request.json();

    if ( proficiency_data.errors ) {
      console.error( proficiency_data.errors );
  
      throw new Error( 'Failed to fetch API' );
    }

    return proficiency_data;
  } ) );
}

export async function getStaticPaths() {
    const paths = await getAllClasses()

    return {
      paths,
      fallback: false
    }
}