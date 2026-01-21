import { NavLink } from 'react-router-dom';
import styles from '../styles/Menu.module.css'
import GoogleLoginButton from './GoogleLoginButton';

function Menu() {
    return (
        <>
            <nav className={styles.menu}>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/profile'><GoogleLoginButton /></NavLink>
            </nav >
        </>
    )
}

export default Menu