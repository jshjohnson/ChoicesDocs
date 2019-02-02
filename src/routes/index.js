module.exports = ({ packageJson, template, React, ReactDOMServer, Layout }) => {
  return {
    version: (req, res) =>
      res.json({
        version: packageJson.version,
      }),
    default: (req, res) => {
      const jsx = <Layout />;
      const reactDom = ReactDOMServer.renderToString(jsx);
      const dom = template.replace('{{ reactDom }}', reactDom);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(dom);
    },
  };
};
