import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <nav>
                <Link to='/profile'>Profile</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Log in</Link>
            </nav >
        </>
    )
}

export default Menu