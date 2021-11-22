export default async function getAllClasses( req, res ) {
    const results = await fetch( process.env.API_BASE_URL + '/classes/?format=json' );
    const classes = await results.json();
  
    if ( classes.errors ) {
        res.status( 400 ).json( classes.errors );
  
        throw new Error( 'Failed to fetch API' );
    }
  
    res.status( 200 ).json( classes.results.map( dndClass => {
        return {
            params : {
                name: dndClass.index,
                friendly_name: dndClass.name,
            }
        }
    } ) );
}
