import styles from './style.css';

export default function({ React, PropTypes }) {
  function Code({ children }) {
    const commands = children.split(' ');

    return (
      <pre className={styles.codeContainer}>
        <code className={styles.code}>
          {commands.map(command => (
            <span key={command} className={styles.command}>
              {`${command} `}
            </span>
          ))}
        </code>
      </pre>
    );
  }

  Code.propTypes = {
    children: PropTypes.string.isRequired,
  };

  return Code;
}
