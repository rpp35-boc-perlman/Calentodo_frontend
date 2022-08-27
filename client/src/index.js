import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import TodoCalendar from './calendar.jsx';

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
        <TodoCalendar />
      </div>
    );
  }
}

root.render(<App />);
