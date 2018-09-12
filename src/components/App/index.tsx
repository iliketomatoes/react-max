import * as React from 'react';
import style from './style.css';
import BarChart from '../BarChart';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React, Giancarlo</h1>
        </header>
        <p className={style.AppIntro}>
          To get started, edit <code>src/App/index.tsx</code> and save to reload.
        </p>
        <BarChart />
      </div>
    );
  }
}

export default App;
