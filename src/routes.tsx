import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Users from './pages/Users';
import Companies from './pages/Companies';
import NewUser from './pages/NewUser';
import NewCompany from './pages/NewCompany';
import Update from './pages/UpdateUser';

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
