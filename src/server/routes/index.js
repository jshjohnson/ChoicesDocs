export default function({ packageJson, template, React, ReactDOMServer, StaticRouter, App }) {
  return {
    version: (req, res) =>
      res.json({
        version: packageJson.version,
      }),
    default: (req, res) => {
      const context = req.params.param ? req.params.param : null;
      const jsx = (
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );
      const reactDom = ReactDOMServer.renderToString(jsx);
      const dom = template.replace('{{ reactDom }}', reactDom);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(dom);
    },
  };
}
