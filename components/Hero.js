import Button from './Button';
import styles from '../styles/components/hero.module.scss';

export default function Hero({title, tagline, background}) {
    return (
        <section 
            className={ styles.hero }
            style={ { backgroundImage: `url(${background})` } }
        >
            <div className={`center-content flexed column wrap jfc-center ${styles.fullscreen}`}>
                <div className='half'>
                    <h1 className="t-white t-96px t-bold mb-10px">{title}</h1>
                    <h3 className="t-white t-32px mb-50px">{tagline}</h3>
                    <Button className='btn btn-small btn-primary t-white t-20px' text='Vamos Lá!' />
                </div>
            </div>
        </section>
    )
}
