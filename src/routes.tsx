import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './Users';
import Companies from './Companies';
import NewUser from './NewUser';
import NewCompany from './NewCompany';
import Update from './UpdateUser';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/companies" component={Companies} />
        <Route path="/newuser" component={NewUser} />
        <Route path="/newcompany" component={NewCompany} />
        <Route path="/update/:id" component={Update} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
