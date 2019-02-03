export default function({
  React,
  Route,
  Switch,
  HomePage,
  ErrorPage,
  ExamplesPage,
}) {
  function App() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/examples" component={ExamplesPage} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    );
  }

  return App;
}
