import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
    return (
        <>
          <main className="container-fluid">
            {this.props.children}
          </main>
        </>
    );
  }

}

export default App;
