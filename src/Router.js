import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Landing from './views/Landing';

const AuthRouter = () => (
  <Router>
    <Switch>
      {
        /* <Route path="/" component={Landing}/> */
      }
      <Route
        path="/"
        render={() => <Landing /> }
      />
    </Switch>
  </Router>
);

export default AuthRouter;
