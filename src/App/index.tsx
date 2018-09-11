import * as React from 'react';
import * as style from './style.css';

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
      </div>
    );
  }
}

export default App;
