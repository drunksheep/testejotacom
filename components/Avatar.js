import Image from 'next/image';
import styles from '../styles/components/avatar.module.scss';

export default function Avatar({ image, rounded }) {
    return (
        <div className={ `${styles.avatarWrapper} ${ rounded ? 'rounded' : '' }` }>
            <Image
                src={image}
                alt='Avatar'
                title='Avatar'
            />
        </div>
    )
}
