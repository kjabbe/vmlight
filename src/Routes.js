import React from 'react';
import { Route } from 'react-router-dom';

import Landing from './views/Landing';

class Routes extends React.Component {
  render = () => {
    return (
      <div className="container">
        <Route path="/" exact component={Landing} />
      </div>
    );
  }
}

export default Routes;
