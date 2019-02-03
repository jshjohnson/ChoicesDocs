import styles from './style.css';
import logo from './logo.svg';

export default function({ React }) {
  function Logo() {
    return (
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="Choices.js logo" />
      </div>
    );
  }

  return Logo;
}
