import styles from '../styles/components/field.module.scss';

export default function Field({ name = '', type = 'text', classes = '', disabled = false, placeholder = '', required = false, selectOptions = [] }) {

    // switch porque no futuro podemos querer usar checkboxes, radios, file, etc e vão precisar de tratamento diferente
    switch (type) {
        case 'select':
            return (
                <select name={name} className={`${styles.fieldBasic} ${classes}`} disabled={disabled} required={required}>
                    {<option disabled defaultValue={placeholder} value={placeholder}>{placeholder}</option>}
                    {
                        selectOptions.map(
                            (option, idx) =>
                                <option key={idx} value={option}>{option}</option>
                        )
                    }
                </select>
            )
            break;

        default:
            return (
                <input
                    type={type}
                    name={name}
                    className={`${styles.fieldBasic} ${classes}`}
                    disabled={disabled}
                    placeholder={placeholder}
                    required={required}
                />
            )
            break;
    }

}
