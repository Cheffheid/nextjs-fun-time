import styles from './basic-features.module.css'

export default function BasicFeatures({ classData }) {
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
                <strong>Skills:</strong> Choose {classData.proficiency_choices[0].choose} from { cleanSkillProficiencies( classData.proficiency_choices[0].from ).join( ', ' ) }<br />
                <strong>Weapons:</strong> { getWeaponProficiencies( classData.proficiencies ).join( ', ' ) }<br />
                <strong>Armor:</strong> { getArmorProficiencies( classData.proficiencies ).join( ', ' ) }<br />
                <strong>Tools:</strong> 
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
 * Get all the weapon proficiencies within the class proficiencies array.
 *
 * @param {Array} proficiencies 
 * @returns Reduced array of weapon proficiencies available to the class.
 */
function getWeaponProficiencies( proficiencies ) {
    return proficiencies.reduce( ( weapons, proficiency ) => {
        if ( ! proficiency.name.includes( 'Armor' ) && ! proficiency.name.includes( 'Shields' ) ) {
            weapons.push( proficiency.name );
        }

        return weapons;
    }, [] );
}

/**
 * Get all the armor proficiencies within the class proficiencies array.
 *
 * @param {Array} proficiencies 
 * @returns Reduced array of armor proficiencies available to the class.
 */
function getArmorProficiencies( proficiencies ) {
    return proficiencies.reduce( ( armors, proficiency ) => {
        if ( proficiency.name.includes( 'Armor' ) || proficiency.name.includes( 'Shields' ) ) {
            armors.push( proficiency.name );
        }

        return armors;
    }, [] );
}