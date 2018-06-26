import React from 'react';

import Header from '../components/Header';
import ResultTable from './ResultTable';

class Home extends React.Component {
  render = () => {
    return (
      <div className="container">
        <Header />
        <ResultTable />
      </div>
    );
  }
}

export default Home;
