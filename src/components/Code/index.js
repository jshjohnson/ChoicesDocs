import styles from './style.css';

export default function({
  React,
  PropTypes,
  highlight,
  highlightLangJS,
  highlightLangCSS,
  highlightLangShell,
}) {
  class Code extends React.Component {
    componentDidMount() {
      highlight.registerLanguage('javascript', highlightLangJS);
      highlight.registerLanguage('css', highlightLangCSS);
      highlight.registerLanguage('shell', highlightLangShell);
      highlight.highlightBlock(this.code);
    }

    render() {
      const { children, language } = this.props;
      const assignRef = ref => {
        this.code = ref;
      };

      return (
        <div className={styles.codeContainer}>
          <pre className={language}>
            <code ref={assignRef}>{children}</code>
          </pre>
        </div>
      );
    }
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
