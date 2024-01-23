/* IMPORTS */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { handleLogin } from '../../store/features/index';
import { selectUserError, selectUserId } from '../../store/selectors/user';
import { useNavigate } from 'react-router';

/* CSS */
import styles from './SignInForm.module.scss';

export default function SignInForm() {
    const userLoginError = useSelector(selectUserError());
    const userId = useSelector(selectUserId());
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(email, password, rememberMe));
    };

    useEffect(() => {
        if (userId === null) navigate('/SignIn');
        else if (userLoginError === null) navigate(`/profile`);
    }, [userId, userLoginError, navigate]);

    return (
        <div className={styles.main}>
            <section className={styles.SignInContent}>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputRemember}>
                        <input
                            type="checkbox"
                            id="remember-me"
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className={styles.SignInButton}>Sign In</button>
                </form>
                {userLoginError && (
                    <p className={styles.error}>{userLoginError}</p>
                )}
            </section>
        </div>
    );
}
