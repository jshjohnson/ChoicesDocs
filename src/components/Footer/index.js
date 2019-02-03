import styles from './style.css';

export default function({ React, LayoutContainer }) {
  function Footer() {
    return (
      <div className={styles.footer}>
        <LayoutContainer>
          <p>
            A thing by <a href="http://joshuajohnson.co.uk">Josh Johnson</a>
          </p>
        </LayoutContainer>
      </div>
    );
  }

  return Footer;
}
