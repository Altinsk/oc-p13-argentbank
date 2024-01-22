/* IMPORTS */
import { useState } from 'react';
import {
    selectUserFirstname,
    selectUserLastname,
    selectUserToken,
} from '../../store/selectors/user';
import { useSelector } from 'react-redux';
import { handleUpdateProfile } from '../../store/features/index';
import store from '../../store/index';

/* CSS */
import styles from './UserHeader.module.scss';

export default function UserHeader() {
    const firstname = useSelector(selectUserFirstname());
    const lastname = useSelector(selectUserLastname());
    const token = useSelector(selectUserToken());
    const [newFirstname, setNewFirstname] = useState(firstname);
    const [newLastname, setNewLastname] = useState(lastname);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch(handleUpdateProfile(token, newFirstname, newLastname));
        handleToggleModal();
    };

    return (
        <header className={styles.userHeader}>
            {!isModalOpen && (
                <div>
                    <h1>
                        Welcome back
                        <br />
                        {`${firstname} ${lastname}`}
                    </h1>
                    <button
                        className={styles.editButton}
                        onClick={handleToggleModal}
                    >
                        Edit Name
                    </button>
                </div>
            )}
            {isModalOpen && (
                <div>
                    <h1>Welcome back</h1>

                    <div className={`${styles.modalContent} bgDark`}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.labels}>
                                <div className={styles.inputWrapper}>
                                    <label htmlFor="firstname"></label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        value={newFirstname}
                                        onChange={(e) =>
                                            setNewFirstname(e.target.value)
                                        }
                                    />
                                </div>
                                <div className={styles.inputWrapper}>
                                    <label htmlFor="lastname"></label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        value={newLastname}
                                        onChange={(e) =>
                                            setNewLastname(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <button
                                    className={styles.modalButton}
                                    type="submit"
                                >
                                    Save
                                </button>
                                <button
                                    className={styles.modalButton}
                                    onClick={handleToggleModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
}
