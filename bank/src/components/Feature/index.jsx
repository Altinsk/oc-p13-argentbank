/* CSS */
import styles from './Feature.module.scss';

export default function Feature({ feature }) {
    return (
        <div className={styles.feature}>
            <img src={feature.icon} alt="Icon" className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p>{feature.text}</p>
        </div>
    );
}
