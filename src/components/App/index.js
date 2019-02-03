export default function({ React, Route, Switch, HomePage, ErrorPage }) {
  function App() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    );
  }

  return App;
}
