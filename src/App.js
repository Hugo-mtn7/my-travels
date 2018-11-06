import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './Travel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Travel destination="Lakey Peak" country="Indonésie" distance="5468" photo="http://i.cdn-surfline.com/surfnews/images/2015/04_april/spotcheck_lakeypeak/full/MICK-CURLEY_SURFLINE_LAKEYS_2015-5777.jpg"/>
          <Travel destination="Siargao" country="Philippines" distance="7923" photo="http://siargao.surf/wp-content/uploads/2017/03/cloud-nine-surfing.jpg"/>
        </header>
      </div>
    );
  }
}

export default App;
