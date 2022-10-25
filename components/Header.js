import Image from 'next/image';
import logo from '../public/logo.svg'; 
import styles from '../styles/components/header.module.scss';

export default function Header() {
    return (
        <header className={styles.masthead}>
            <nav className='header-nav bg-white pdt-30px pdb-30px'>
                <div className='center-content'>
                    <Image
                        src={logo}
                        alt='Logo Foodish'
                        title='Logo Foodish'
                     />                    
                </div>
            </nav>
        </header>
    )
}
