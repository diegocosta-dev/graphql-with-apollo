import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './Users';
import Companies from './Companies';
import NewUser from './NewUser';
import NewCompany from './NewCompany';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/companies" component={Companies} />
        <Route path="/newuser" component={NewUser} />
        <Route path="/newcompany" component={NewCompany} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;