import { ConnectedRouter as BrowserRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MasterLayout } from './components/layouts';
import { Dashboard, FAQ } from './pages';

const Routes = ({ history }) => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <MasterLayout>
          <Route path="/" exact component={Dashboard} />
          <Route path="/faq" exact component={FAQ} />
        </MasterLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
