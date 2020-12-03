import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './Users';
import Companies from './Companies';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/companies" component={Companies} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
