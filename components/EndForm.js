import styles from '../styles/components/endForm.module.scss';
import Form from './Form';

export default function EndForm() {
  return (
    <section className={styles.endForm}>
        <div className='center-content flexed wrap min-100vh keep-flex'>
            <Form />
        </div>
    </section>
  )
}
