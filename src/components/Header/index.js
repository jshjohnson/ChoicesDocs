import styles from './style.css';

export default function({ React, Logo, LayoutContainer, Navigation }) {
  function Header() {
    return (
      <div className={styles.outerContainer}>
        <LayoutContainer>
          <div className={styles.innerContainer}>
            <Logo />
            <Navigation />
          </div>
        </LayoutContainer>
      </div>
    );
  }

  return Header;
}
