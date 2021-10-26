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
                <strong>Skills:</strong> Choose {classData.proficiency_choices[0].choose} from { cleanProficiencies( classData.proficiency_choices[0].from ).join( ', ' ) }<br />
                <strong>Weapons:</strong> { classData.proficiencies.map( ( proficiency ) => {
                    return proficiency.name
                } ).join( ', ' ) }
            </p>
        </div>
    )
}

function cleanProficiencies( proficiencies ) {
    return proficiencies.map( ( proficiency ) => {
        return proficiency.name.replace( 'Skill: ', '' );
    } );
}