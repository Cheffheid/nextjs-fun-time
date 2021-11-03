import styles from './basic-features.module.css'

export default function BasicFeatures({ classData, proficiencyData }) {
    return (
        <div className="class-features">
            <h2>Class Features</h2>
            <p>As a {classData.name}, you gain the following:</p>

            <h3>Hit Points</h3>
            <p>
                <strong>Hit Dice:</strong> 1d{classData.hit_die} per level of {classData.name}.<br />
                <strong>Hit Points at first level:</strong> {classData.hit_die} + your Constitution modifier.<br />
                <strong>Hit Points at higher levels:</strong> 1d{classData.hit_die} + your Constitution modifier per level of {classData.name} after the first.
            </p>

            <h3>Proficiencies</h3>
            <p>
                <strong>Armor:</strong> { displayProficiencyList( classData.proficiencies, proficiencyData['Armor'] ) }<br />
                <strong>Weapons:</strong> { displayProficiencyList( classData.proficiencies, proficiencyData['Weapons'] ) }<br />
                <strong>Tools:</strong> { displayProficiencyList( classData.proficiencies, proficiencyData['Artisan\'s Tools'] ) }<br />
                <strong>Saving Throws:</strong> { displayProficiencyList( classData.proficiencies, proficiencyData['Saving Throws'] ) }<br />
            </p>
            <p>
                <strong>Skills:</strong> Choose {classData.proficiency_choices[0].choose} from { cleanSkillProficiencies( classData.proficiency_choices[0].from ).join( ', ' ) }.
            </p>
        </div>
    )
}

/**
 * Cleans up skill names and removes "Skill: " from the string.
 *
 * @param {Array} proficiencies 
 * @returns Array of skills with new names.
 */
function cleanSkillProficiencies( proficiencies ) {
    return proficiencies.map( ( proficiency ) => {
        return proficiency.name.replace( 'Skill: ', '' );
    } );
}

/**
 * Display a neat string of class proficiencies of a specific type, ie. "Armor".
 * 
 * @param {object} proficiencies All available class proficiencies.
 * @param {object} allProficiencies All available proficiencies to check against. Most likely a subset like "Armor".
 * @returns String of comma separated proficiencies, or None if none are found of a specific type.
 */
function displayProficiencyList( proficiencies, allProficiencies ) {

    let allClassProficiencies = {};

    Object.values( proficiencies ).forEach( proficiency => {
        if ( ! allClassProficiencies.hasOwnProperty( proficiency.index ) ) {
            allClassProficiencies[proficiency.index] = [];
        }
      
        allClassProficiencies[proficiency.index].push( proficiency );
    } );

    let classProficiencyList = allProficiencies.reduce( ( classProficiencies, proficiency ) => {

        if ( allClassProficiencies.hasOwnProperty( proficiency.index ) ) {
            classProficiencies.push( proficiency.name );
        }

        return classProficiencies;
    }, [] );

    if ( 0 === classProficiencyList.length ) {
        return 'None';
    }

    return classProficiencyList.join( ', ' );
}
