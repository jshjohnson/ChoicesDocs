import styles from './style.css';
import logo from './logo.svg';

export default function({ React }) {
  function Logo() {
    return (
      <div className={styles.logoContainer}>
        <a href="/">
          <img className={styles.logo} src={logo} alt="Choices.js logo" />
        </a>
      </div>
    );
  }

  return Logo;
}
