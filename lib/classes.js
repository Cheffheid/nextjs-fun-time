export async function getAllClasses() {
    const res = await fetch( `${process.env.SERVER}/api/classes/all` );
    const classes = await res.json();
  
    if ( classes.errors ) {
      console.error( classes.errors );
  
      throw new Error( 'Failed to fetch API' );
    }

    return classes;
}
