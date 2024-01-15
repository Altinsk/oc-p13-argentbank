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
            <h1>
                Welcome back
                <br />
                {`${firstname} ${lastname}`}
            </h1>
            <button className={styles.editButton} onClick={handleToggleModal}>
                Edit Name
            </button>
            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={`${styles.modalContent} bgDark`}>
                        <div
                            className={styles.modalClose}
                            onClick={handleToggleModal}
                        >
                            &#10060;
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="firstname">Prénom</label>
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
                                <label htmlFor="lastname">Nom</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    value={newLastname}
                                    onChange={(e) =>
                                        setNewLastname(e.target.value)
                                    }
                                />
                            </div>
                            <button
                                className={styles.modalButton}
                                type="submit"
                            >
                                Mettre à jour mes données
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
}
