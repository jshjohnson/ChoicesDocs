import styles from './style.css';

export default function({ React, PropTypes, LayoutContainer }) {
  function ContentSection({ children }) {
    return (
      <div className={styles.contentSection}>
        <LayoutContainer>{children}</LayoutContainer>
      </div>
    );
  }

  ContentSection.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  return ContentSection;
}
