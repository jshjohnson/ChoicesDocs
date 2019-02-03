import styles from './style.css';

export default function({ React, PropTypes, Highlight }) {
  function Code({ children, language }) {
    return (
      <div className={styles.codeContainer}>
        <Highlight className={language}>{children}</Highlight>
      </div>
    );
  }

  Code.propTypes = {
    children: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  Code.defaultProps = {
    language: 'javascript',
  };

  return Code;
}
