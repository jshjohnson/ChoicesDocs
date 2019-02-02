import styles from './style.css';

export default function({ React }) {
  function Navigation() {
    return (
      <ul className={styles.navigation}>
        <li>Home</li>
        <li>Installation</li>
        <li>Usage</li>
        <li>Repository</li>
      </ul>
    );
  }

  return Navigation;
}
