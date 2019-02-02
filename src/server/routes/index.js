export default function({ packageJson, template, React, ReactDOMServer, App }) {
  return {
    version: (req, res) =>
      res.json({
        version: packageJson.version,
      }),
    default: (req, res) => {
      const jsx = <App />;
      const reactDom = ReactDOMServer.renderToString(jsx);
      const dom = template.replace('{{ reactDom }}', reactDom);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(dom);
    },
  };
}
