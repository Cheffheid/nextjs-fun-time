import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ link, image, text }) {
    return (
        <Link href={link}>
            <a className={styles.card}>
            <Image
                src={image}
                height={160}
                width={256}
                alt=""
            />
                <h2>{text} &rarr;</h2>
            </a>
        </Link>
    )
}
