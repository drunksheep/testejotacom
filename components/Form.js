import styles from "../styles/components/Form.module.scss";
import Field from "./Field";
import Button from "./Button"

export default function Form({ legend = 'Cadastre-se', clear = true, submitText = 'Enviar' }) {

    const fields = [
        { name: 'Nome', type: 'text', classes: 'full', disabled: false, placeholder: 'Nome', required: true}, 
        { name: 'E-mail', type: 'email', classes: 'full', disabled: false, placeholder: 'E-mail',  required: true}, 
        { name: 'Telefone', type: 'tel', classes: 'full', disabled: false, placeholder: 'Telefone', required: true}, 
        { name: 'Cidade', type: 'text', classes: 'two-thirds', disabled: false, placeholder: 'Cidade', required: true}, 
        { name: 'UF', type: 'select', classes: 'one-third', disabled: false, placeholder: 'UF', required: true, selectOptions: [ 'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']}
    ];

    return (
        <div className={ `bg-black flexed column wrap aic-center jfc-center keep-flex ${styles.formWrapper}` }>
            <form className={ `${styles.endForm}` }>
                {
                    legend ?
                        <legend className='t-48px t-white t-bold t-centered mb-40px mb-mob-30px t-mob-32px'>
                            {legend}
                        </legend>
                        : null
                }
                <fieldset className='fields'>
                    <div className="flexed row wrap jfc-between aic-center keep-flex">
                        {
                            fields.map( 
                                (field, idx) => 
                                <Field key={idx}
                                    type={field.type} 
                                    name={field.name} 
                                    classes={field.classes} 
                                    placeholder={field.placeholder}
                                    disabled={field.disabled}
                                    selectOptions={field.selectOptions}
                                    required={field.required}
                                /> 
                            )
                        }
                        {
                            clear ? <Button text={'Limpar'} classes={'btn btn-transparent-white btn-lg t-32px t-mob-20px mt-mob-20px mt-40px'} /> : null
                        }
                        <Button text={submitText} classes={'btn btn-lg btn-primary t-white t-32px mt-40px t-mob-20px mt-mob-20px'} />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
