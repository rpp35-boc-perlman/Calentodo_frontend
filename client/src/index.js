import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

const container = document.getElementById('root');
const root = createRoot(container);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello Worldasdf
      </div>
    );
  }
}

root.render(<App />);
