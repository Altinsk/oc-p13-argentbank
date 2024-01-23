/* CSS */
import styles from './Header.module.scss';

/* IMPORTS */
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectUserFirstname,
    selectUserId,
    selectUserIsConnected,
} from '../../store/selectors/user';
import { logout } from '../../store/slices/user';

/* ASSETS */
import logo from '../../assets/argentBankLogo.png';

export default function Header() {
    const isConnected = useSelector(selectUserIsConnected());
    const firstname = useSelector(selectUserFirstname());
    const userId = useSelector(selectUserId());
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className={styles.mainNav}>
            <Link to="/" className={styles.mainNavLogo}>
                <img
                    src={logo}
                    className={styles.mainNavLogoImage}
                    alt="Logo ArgentBank"
                />
            </Link>
            {isConnected ? (
                <div>
                    <Link to={`/profile`} className={styles.mainNavItem}>
                        <i className="fa fa-user-circle"></i> {firstname}&nbsp;
                    </Link>
                    <Link
                        to="/"
                        className={styles.mainNavItem}
                        onClick={handleLogout}
                    >
                        <i className="fa fa-sign-out"></i> Sign Out
                    </Link>
                </div>
            ) : (
                <Link to="/signIn" className={styles.mainNavItem}>
                    <i className="fa fa-user-circle"></i> Sign In
                </Link>
            )}
        </header>
    );
}
