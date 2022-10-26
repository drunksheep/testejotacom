import Image from 'next/image';
import imageURL from '../public/image.jpg';

export default function GenericSection({ classNames }) {
    return (
        <section className={classNames}>
            <div className='center-content flexed row wrap jfc-between aic-center pdt-mob-40px pdb-mob-40px'>
                <div className='half'>
                    <h2 className='t-white t-bold t-48px t-mob-30px mb-40px t-centered-mob mb-mob-20px'>
                        Lorem ipsum sit
                    </h2>
                    <p className='t-22px t-white t-lh-30px mb-20px mb-mob-20px t-centered-mob t-mob-14px t-lh-mob-18px'>
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p className='t-22px t-white t-lh-30px t-centered-mob t-mob-14px t-lh-mob-18px'>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className='half mt-mob-30px'>
                    <Image
                        src={imageURL}
                        alt='Imagem de panela com comida sendo refogada e mão mexendo com colher de pau'
                        title='Imagem de panela com comida sendo refogada e mão mexendo com colher de pau'
                    />
                </div>
            </div>
        </section>
    )
}
