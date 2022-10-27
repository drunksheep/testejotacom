import styles from "../styles/components/Form.module.scss";
import Field from "./Field";
import Button from "./Button"
import { useForm } from "react-hook-form";
import { useAlert } from 'react-alert'
import LoadingOverlay from 'react-loading-overlay';
import { useState } from "react";

export default function Form({ legend = 'Cadastre-se', clear = true, submitText = 'Enviar' }) {

    const alert = useAlert();
    const [loader, setLoader] = useState(false);

    // isso aqui poderia facilmente se tornar uma prop, mas vamos manter assim já que não podemos prever a necessidade de reutilizar.
    // a refatoração tá fácil. 
    const fields = [
        { name: 'Nome', type: 'text', classes: 'full', disabled: false, placeholder: 'Nome', required: true, validationSchema: { min: 2 } },
        { name: 'E-mail', type: 'email', classes: 'full', disabled: false, placeholder: 'E-mail', required: true, validationSchema: { min: 3 } },
        { name: 'Telefone', type: 'tel', classes: 'full', disabled: false, placeholder: 'Telefone', required: true, validationSchema: { min: 8 } },
        { name: 'Cidade', type: 'text', classes: 'two-thirds', disabled: false, placeholder: 'Cidade', required: true, validationSchema: { min: 2 } },
        { name: 'UF', type: 'select', classes: 'one-third', disabled: false, placeholder: 'UF', required: true, selectOptions: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'] }
    ];

    // // início tratamento com react-hook-form
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        defaultValues: {
            Nome: '', 
            'E-mail': '', 
            Telefone: '', 
            Cidade: '', 
            UF: 'UF'
        }
    });

    // handler do submit
    async function registerFields(values) {
        setLoader(true);

        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(values),
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-cache',
        }

        // fetch para a rota da api
        try {
            const response = await fetch('http://localhost:3000/api/registerData', fetchConfig);
            const data = await response.json()
            let message = data.message;

            // mensagem de feedback para o usuário
            data.results === 'failure' ? alert.error(message) : alert.success(message);

        } catch(e) {
            console.log(e);
            return e
        }

        setLoader(false);
    }

    return (
        <div className={`bg-black flexed column wrap aic-center jfc-center keep-flex ${styles.formWrapper}`}>
            <LoadingOverlay
                active={loader}
                spinner
                text='Carregando...'
            >
                <form className={`${styles.endForm}`} onSubmit={handleSubmit(registerFields)} >
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
                                            register={register}
                                            validationSchema={field.validationSchema}
                                        />
                                )
                            }
                            {
                                clear ? <Button clickAction={e => {reset()}} text={'Limpar'} classes={'btn btn-transparent-white btn-lg t-32px t-mob-20px mt-mob-20px mt-40px'} /> : null
                            }
                            <Button text={submitText} classes={'btn btn-lg btn-primary t-white t-32px mt-40px t-mob-20px mt-mob-20px'} />
                        </div>
                    </fieldset>
                </form>
            </LoadingOverlay>
        </div>
    )
}
