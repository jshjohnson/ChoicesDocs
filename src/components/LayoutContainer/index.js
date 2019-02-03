import styles from './style.css';

export default function({ React, PropTypes }) {
  function LayoutContainer({ children }) {
    return <div className={styles.layoutContainer}>{children}</div>;
  }

  LayoutContainer.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return LayoutContainer;
}
