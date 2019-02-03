import styles from './style.css';

export default function({ React }) {
  function Header() {
    return (
      <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <a href="/">Home</a>
        </li>
        <li className={styles.navigationItem}>
          <a href="">Examples</a>
        </li>
        <li className={styles.navigationItem}>
          <a href="https://github.com/jshjohnson/Choices">Repository</a>
        </li>
      </ul>
    );
  }

  return Header;
}
