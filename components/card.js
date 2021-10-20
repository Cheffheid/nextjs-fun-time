import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ link, image, text, width = 'half' }) {
    return (
        <Link href={link}>
            <a className={`${styles.card} ${styles[width]}`}>
            <Image
                src={image.url}
                height={image.height}
                width={image.width}
                alt=""
            />
                <h2>{text} &rarr;</h2>
            </a>
        </Link>
    )
}
