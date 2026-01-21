import Menu from './Menu.tsx'
import styles from '../styles/header.module.css'
import logo from '../../assets/images/R_logo2.webp'

function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.headingDiv}>
                    <img className={styles.logo} src={logo} alt="Logotype" />
                    <h1 className={styles.headerHeading}>Retrowave Music Community</h1>
                </div>
                <Menu />
            </div>

        </>
    )

}
export default Header