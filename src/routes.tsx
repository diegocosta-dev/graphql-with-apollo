import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './pages/Users';
import Companies from './pages/Companies';
import NewUser from './pages/NewUser';
import NewCompany from './pages/NewCompany';
import UpdateUser from './pages/UpdateUser';
import UpdateCompany from './pages/UpdateCompany';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/companies" component={Companies} />
        <Route path="/newuser" component={NewUser} />
        <Route path="/newcompany" component={NewCompany} />
        <Route path="/updateuser/:id" component={UpdateUser} />
        <Route path="/updatecompany/:id" component={UpdateCompany} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
