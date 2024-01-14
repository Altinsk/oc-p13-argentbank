/* CSS */
import styles from './FeaturesList.module.scss';

/* COMPONENTS */
import Feature from '../Feature/index';

export default function FeaturesList({ features }) {
    return (
        <ul className={styles.featuresList}>
            {features.map((feature, key) => (
                <li key={key} className={styles.featureItem}>
                    <Feature feature={feature} />
                </li>
            ))}
        </ul>
    );
}
