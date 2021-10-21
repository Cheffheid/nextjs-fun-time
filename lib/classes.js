export async function getAllClasses() {
    const res = await fetch( process.env.API_BASE_URL + '/classes/?format=json' );
    const classes = await res.json();
  
    if ( classes.errors ) {
      console.error( classes.errors );
  
      throw new Error( 'Failed to fetch API' );
    }
  
    return classes.results.map( dndClass => {
        return {
            params: {
                name: dndClass.index,
                friendly_name: dndClass.name,
            }
        }
    } );
}