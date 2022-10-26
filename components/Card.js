import styles from '../styles/components/Card.module.scss';
import Avatar from './Avatar';
import Button from './Button';
import avatarImage from '../public/avatar.jpg'

export default function Card( { title, description } ) {
  return (
    <div className={styles.card}>
        <Avatar rounded image={avatarImage} />
        <h3 className='t-dark t-48px t-mob-36px t-bold mb-20px'>{title}</h3>
        <p className='t-dark t-22px t-mob-20px t-lh-28px t-lh-mob-22px t-centered'>{description}</p>
        <Button classes='btn btn-default btn-primary t-white t-20px t-mob-18px' text='Learn More' />
    </div>
  )
}
