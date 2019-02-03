export default function({
  packageJson,
  template,
  React,
  ReactDOMServer,
  StaticRouter,
  App,
}) {
  return {
    version: (req, res) =>
      res.json({
        version: packageJson.version,
      }),
    robots: (req, res) => {
      res.type('text/plain');
      res.send('User-agent: *\nDisallow: ');
    },
    default: (req, res) => {
      const context = {};
      const jsx = (
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );
      const html = ReactDOMServer.renderToString(jsx);
      const parsedHTML = template.replace('{{ reactDom }}', html);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(parsedHTML);
      res.end();
    },
  };
}
