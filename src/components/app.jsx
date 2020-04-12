import React from 'react';
import HorsesIndex from '../containers/horses_index';
import AddHorse from '../containers/add_horses';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <AddHorse />
          </div>
          <div className="col-xs-12 col-sm-6">
            <HorsesIndex />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
