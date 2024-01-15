/* CSS */
import styles from './Account.module.scss';

export default function Account({ account }) {
    const formattedNumber = (number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(number);
    };

    return (
        <section className={styles.account}>
            <div className={styles.accountContentWrapper}>
                <h3 className={styles.accountTitle}>{account.title}</h3>
                <p className={styles.accountAmount}>
                    {formattedNumber(account.amount)}
                </p>
                <p className={styles.accountAmountDescription}>
                    {account.description}
                </p>
            </div>
            <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
                <button className={styles.transactionButton}>
                    View transactions
                </button>
            </div>
        </section>
    );
}
