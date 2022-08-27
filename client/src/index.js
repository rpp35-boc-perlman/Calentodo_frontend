import React from 'react';
import EditModal from './edit_modal/edit.js';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

import Main from './components/Todo/Main.jsx'

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
        <EditModal />
        <Main />
      </div>
    );
  }
}

root.render(<App />);