import Image from 'next/image';
import styles from '../styles/components/footer.module.scss';
import fb from '../public/facebook.svg';
import insta from '../public/instagram.svg';

export default function Footer() {
    return (
        <footer className={styles.hull}>
            <div className={`${styles.centerContent} center-content flexed column wrap jfc-center aic-center pdt-60px pdb-60px pdt-mob-30px pdb-mob-30px`}>
                <p className='t-white t-22px t-lig mb-10px full t-centered'>foodish 2021</p>
                <div className={styles.socialWrapper}>
                    <Image
                        className={styles.socialWrapper.span}
                        src={fb}
                        alt='Ícone do Facebook em Branco'
                        title='Ícone do Facebook em Branco'
                    />
                    &nbsp;&nbsp;&nbsp;
                    <Image
                        className={styles.socialWrapper.span}
                        src={insta}
                        alt='Ícone do Instagram em Branco'
                        title='Ícone do Instagram em Branco'
                    />
                </div>
            </div>
        </footer>
    )
}
