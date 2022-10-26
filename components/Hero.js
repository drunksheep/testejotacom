import Button from './Button';
import styles from '../styles/components/hero.module.scss';

export default function Hero({title, tagline, background}) {
    return (
        <section 
            className={ styles.hero }
            style={ { backgroundImage: `url(${background})` } }
        >
            <div className={`center-content flexed column wrap jfc-center keep-flex t-centered-mob ${styles.fullscreen}`}>
                <div className='half'>
                    <h1 className="t-white t-92px t-mob-38px t-bold mb-10px mb-mob-40px">{title}</h1>
                    <h3 className="t-white t-32px t-mob-16px mb-50px mb-mob-30px">{tagline}</h3>
                    <Button classes='btn btn-default btn-primary t-white t-20px t-mob-14px' text='Vamos Lá!' />
                </div>
            </div>
        </section>
    )
}
