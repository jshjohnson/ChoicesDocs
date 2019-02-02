import styles from './style.css';

export default function({ React }) {
  function Navigation() {
    return (
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <ul className={styles.navigationList}>
            <li>Home</li>
            <li>Installation</li>
            <li>Usage</li>
            <li>Repository</li>
          </ul>
        </div>
      </div>
    );
  }

  return Navigation;
}
